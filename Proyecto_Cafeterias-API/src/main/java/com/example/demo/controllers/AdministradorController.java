
package com.example.demo.controllers;

import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.services.*;
import com.example.demo.models.*;

@RestController
@RequestMapping("/administrador")
public class AdministradorController{
	
	@Autowired
	AdministradorService administradorService;
	
	@Autowired
	private JavaMailSender mail;
	
	@GetMapping()
	public ArrayList<AdministradorModel> obtenerAdministradores(){
		return administradorService.obtenerAdministradores();
	}
	
	@PostMapping()
	public AdministradorModel guardarAdministrador(@RequestBody AdministradorModel administrador) {
		
		SimpleMailMessage email = new SimpleMailMessage();
		
		email.setTo("erickcasarrubiascruz8@gmail.com");
        email.setFrom("erickcasarrubiascruz8@gmail.com");
        email.setSubject("Administrador Agregado");
        email.setText("Se ha agregado un nuevo Administrador");

        mail.send(email);
		
		return this.administradorService.guardarAdministrador(administrador);
	}
}