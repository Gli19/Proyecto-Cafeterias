
package com.example.demo.services;

import com.example.demo.repositories.*;
import com.example.demo.models.*;

import java.util.ArrayList;

import org.hibernate.type.descriptor.java.UUIDJavaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService{
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	public ArrayList<UsuarioModel> obtenerUsuarios(){
		return (ArrayList<UsuarioModel>) usuarioRepository.findAll();
	}
	
	public UsuarioModel guardarUsuario(UsuarioModel usuario) {
		return usuarioRepository.save(usuario);
	}

	public UsuarioModel findById(Long id) {
        return usuarioRepository.findById(id).orElse(null); //si no llega sera nulo
    }

	public UsuarioModel buscarPorCorreoYContrasena(String correoElectronico, String contrasena){
		return usuarioRepository.findByCorreoElectronicoAndContrasena(correoElectronico, contrasena);
	}

	
}