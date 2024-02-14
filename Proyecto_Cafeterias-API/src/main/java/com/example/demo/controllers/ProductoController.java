
package com.example.demo.controllers;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.services.*;
import com.lowagie.text.DocumentException;

import jakarta.servlet.http.HttpServletResponse;

import com.example.demo.models.*;
import com.example.demo.reportes.ProductosPDF;

import org.springframework.web.bind.annotation.ResponseStatus;


@RestController
@RequestMapping("/producto") 
@CrossOrigin(origins = "http://localhost:4200")


public class ProductoController{
	
	@Autowired
	ProductoService productoService;
	
	
	@Autowired
	private JavaMailSender mail;

	@GetMapping()
	public ArrayList<ProductoModel> obtenerProductos(){
		return productoService.obtenerProductos();
	}
	
	
  @GetMapping("/cafeteria/{cafeteriaId}")
  @ResponseStatus(HttpStatus.OK)
  public List<ProductoModel> obtenerProductosPorCafeteria(@PathVariable Long cafeteriaId) {
	  List<ProductoModel> productos = productoService.obtenerProductosPorCafeteria(cafeteriaId);
	  return productos;
  }

	@PostMapping()
	public ProductoModel guardarProducto(@RequestBody ProductoModel producto) {
	
	 	SimpleMailMessage email = new SimpleMailMessage();
		
		email.setTo("erickcasarrubiascruz8@gmail.com");
        email.setFrom("erickcasarrubiascruz8@gmail.com");
        email.setSubject("Producto Agregado");
        email.setText("Se ha agregado un nuevo Producto");

        mail.send(email);

		return this.productoService.guardarProducto(producto);
	}

	@GetMapping("/{id}")        
    @ResponseStatus(HttpStatus.OK)
	public ProductoModel showById(@PathVariable Long id){
        return this.productoService.findById(id);

    }

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<ProductoModel> update(@PathVariable Long id, @RequestBody ProductoModel pm){
	ProductoModel actulizado = this.productoService.editarProduct(id, pm);
	
	SimpleMailMessage email = new SimpleMailMessage();
	
		email.setTo("erickcasarrubiascruz8@gmail.com");
	    email.setFrom("erickcasarrubiascruz8@gmail.com");
	    email.setSubject("Actualización de Producto");
	    email.setText("Se ha actualizado el producto: "+ id);
	
	    mail.send(email);
	
		return ResponseEntity.ok(actulizado);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<ProductoModel> delete(@PathVariable Long id){
		
		SimpleMailMessage email = new SimpleMailMessage();
		
		email.setTo("erickcasarrubiascruz8@gmail.com");
	    email.setFrom("erickcasarrubiascruz8@gmail.com");
	    email.setSubject("Eliminación de Producto");
	    email.setText("Se ha eliminado el producto: "+ id);
	
	    mail.send(email);
	    
	ProductoModel	p = this.productoService.eliminarProducto(id);
		return  ResponseEntity.ok(p);
	}
	
	@GetMapping("/exportarPDF")
	public void exportarListadoProductosPDF(HttpServletResponse response) throws DocumentException, IOException{
		response.setContentType("application/PDF");
		
		DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
		String fechaActual = dateFormatter.format(new Date());;
		
		String cabecera = "Content-Disposition";
		String valor = "attachment; filename=Cliente_" + fechaActual + ".pdf";
		
		response.setHeader(cabecera, valor);
		
		List<ProductoModel> productos = productoService.obtenerProductos();
		
		ProductosPDF exporter = new ProductosPDF(productos);
		exporter.exportarProductosPDF(response);
	
	}

}