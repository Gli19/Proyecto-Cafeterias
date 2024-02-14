
package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.services.*;
import com.example.demo.models.*;

@RestController
@RequestMapping("/resenaproducto")
@CrossOrigin(origins = "http://localhost:4200")

public class ReseñaproductoController{
	
	@Autowired
	ReseñaproductoService reseñaproductoService;
	
	@Autowired
	private JavaMailSender mail;
	
	@GetMapping()
	public ArrayList<ReseñaproductoModel> obtenerReseñaproducto(){
		return reseñaproductoService.obtenerReseñaproductos();
	}
	
	@PostMapping()
	public ReseñaproductoModel guardarReseñaproducto(@RequestBody ReseñaproductoModel reseñaproducto) {
		
		SimpleMailMessage email = new SimpleMailMessage();
		
		email.setTo("erickcasarrubiascruz8@gmail.com");
        email.setFrom("erickcasarrubiascruz8@gmail.com");
        email.setSubject("Reseña de Producto");
        email.setText("Se ha agregado una nueva Reseña de un Producto");

        mail.send(email);
		
		return this.reseñaproductoService.guardarReseñaproducto(reseñaproducto);
	}

	@GetMapping("/producto/{productoId}")
	@ResponseStatus(HttpStatus.OK)
	public List<ReseñaproductoModel> obtenerProductosPorProducto(@PathVariable Long productoId) {
		List<ReseñaproductoModel> resena = reseñaproductoService.obtenerResenaPorProducto(productoId);
		return resena;
	}

	@GetMapping("/{productoId}")
    public Float obtenerCalificacionPromedio(@PathVariable Long productoId) {
        return reseñaproductoService.obtenerPromedioProductoById(productoId);
    }


}