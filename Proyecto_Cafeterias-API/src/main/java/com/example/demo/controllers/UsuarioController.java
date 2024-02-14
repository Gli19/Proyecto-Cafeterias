
package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.services.*;
import com.example.demo.models.*;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "http://localhost:4200")

public class UsuarioController{
	
	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping()
	public ArrayList<UsuarioModel> obtenerUsuarios(){
		return usuarioService.obtenerUsuarios();
	}
	
	@PostMapping()
	public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario) {
		return this.usuarioService.guardarUsuario(usuario);
	}

	@GetMapping("/{id}")        
    @ResponseStatus(HttpStatus.OK)
	public UsuarioModel showById(@PathVariable Long id){
        return this.usuarioService.findById(id);

    }


	@GetMapping("/login/{correoElectronico}/{contrasena}")        
    @ResponseStatus(HttpStatus.OK)
	public UsuarioModel showByCorreoAndContrasena(
		 @PathVariable String correoElectronico,
         @PathVariable String contrasena
		){
        return this.usuarioService.buscarPorCorreoYContrasena(correoElectronico, contrasena);

    }


	


}