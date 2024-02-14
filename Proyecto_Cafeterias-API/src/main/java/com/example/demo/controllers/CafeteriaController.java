
package com.example.demo.controllers;


import java.util.List;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.services.*;
import com.lowagie.text.DocumentException;

import jakarta.servlet.http.HttpServletResponse;

import com.example.demo.models.*;
import com.example.demo.reportes.CafeteriasPDF;

@RestController
@RequestMapping("/cafeteria")
@CrossOrigin(origins = "http://localhost:4200")
public class CafeteriaController{
	
	@Autowired
	CafeteriaService cafeteriaService;
	
	@Autowired
	private JavaMailSender mail;
	
	@GetMapping()
	public ArrayList<CafeteriaModel> obtenerCafeterias(){
		return cafeteriaService.obtenerCafeterias();
	}
	
	@PostMapping()
	public CafeteriaModel guardarCafeteria(@RequestBody CafeteriaModel cafeteria) {
		
		SimpleMailMessage email = new SimpleMailMessage();
		
		email.setTo("erickcasarrubiascruz8@gmail.com");
        email.setFrom("erickcasarrubiascruz8@gmail.com");
        email.setSubject("Cafeteria Agregado");
        email.setText("Se ha agregado una nueva Cafeteria");

        mail.send(email);
		
		return this.cafeteriaService.guardarCafeteria(cafeteria);
	}

	@GetMapping("/{id}")        
    @ResponseStatus(HttpStatus.OK)
	public CafeteriaModel showById(@PathVariable Long id){
        return this.cafeteriaService.findById(id);

    }

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<CafeteriaModel> update(@PathVariable Long id, @RequestBody CafeteriaModel pm){
	CafeteriaModel actulizado = this.cafeteriaService.obtenerCaf(id, pm);
	
		SimpleMailMessage email = new SimpleMailMessage();
		
		email.setTo("erickcasarrubiascruz8@gmail.com");
	    email.setFrom("erickcasarrubiascruz8@gmail.com");
	    email.setSubject("Actualización de Cafeteria");
	    email.setText("Se ha actualizado la cafeteria: "+ id);
	
	    mail.send(email);
	
		return ResponseEntity.ok(actulizado);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<CafeteriaModel> delete(@PathVariable Long id){
		
		SimpleMailMessage email = new SimpleMailMessage();
		
		email.setTo("erickcasarrubiascruz8@gmail.com");
	    email.setFrom("erickcasarrubiascruz8@gmail.com");
	    email.setSubject("Eliminación de Cafeteria");
	    email.setText("Se ha eliminado la cafeteria: "+ id);
	
	    mail.send(email);
	    
	CafeteriaModel	p = this.cafeteriaService.eliminarCafe(id);
		return  ResponseEntity.ok(p);
	}
	
	@GetMapping("/exportarPDF")
	public void exportarListadoCafeteriasPDF(HttpServletResponse response) throws DocumentException, IOException{
		response.setContentType("application/PDF");
		
		DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
		String fechaActual = dateFormatter.format(new Date());;
		
		String cabecera = "Content-Disposition";
		String valor = "attachment; filename=Cliente_" + fechaActual + ".pdf";
		
		response.setHeader(cabecera, valor);
		
		List<CafeteriaModel> cafeterias = cafeteriaService.obtenerCafeterias();
		
		CafeteriasPDF exporter = new CafeteriasPDF(cafeterias);
		exporter.exportarCafeteriasPDF(response);
	
	}

}

