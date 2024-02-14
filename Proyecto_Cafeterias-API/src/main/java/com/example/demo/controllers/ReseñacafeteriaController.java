
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
@RequestMapping("/resenacafeteria")
@CrossOrigin(origins = "http://localhost:4200")

public class ReseñacafeteriaController{
	
	@Autowired
	ReseñacafeteriaService reseñacafeteriaService;
	
	@Autowired
	private JavaMailSender mail;
	
	@GetMapping()
	public ArrayList<ReseñacafeteriaModel> obtenerReseñacafeterias(){
		return reseñacafeteriaService.obtenerReseñacafeterias();
	}
	
	@PostMapping()
	public ReseñacafeteriaModel guardarReseñacafeteria(@RequestBody ReseñacafeteriaModel reseñacafeteria) {
		
		SimpleMailMessage email = new SimpleMailMessage();
		
		email.setTo("erickcasarrubiascruz8@gmail.com");
        email.setFrom("erickcasarrubiascruz8@gmail.com");
        email.setSubject("Reseña de Cafeteria");
        email.setText("Se ha agregado una nueva Reseña de una Cafeteria");

        mail.send(email);
		
		return this.reseñacafeteriaService.guardarReseñacafeteria(reseñacafeteria);
	}


	@GetMapping("/{cafeteriaId}")
    public Float obtenerCalificacionPromedio(@PathVariable Long cafeteriaId) {
        return reseñacafeteriaService.obtenerPromedioCafeteriaById(cafeteriaId);
    }


	@GetMapping("/cafeteria/{cafeteriaId}")
	@ResponseStatus(HttpStatus.OK)
	public List<ReseñacafeteriaModel> obtenerCafeteriasPorCafeteria(@PathVariable Long cafeteriaId) {
		List<ReseñacafeteriaModel> resena = reseñacafeteriaService.obtenerResenaPorCafeteria(cafeteriaId);
		return resena;
	}
}