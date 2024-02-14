
package com.example.demo.services;

import com.example.demo.repositories.*;
import com.example.demo.models.*;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministradorService{
	
	@Autowired
	AdministradorRepository administradorRepository;
	
	public ArrayList<AdministradorModel> obtenerAdministradores(){
		return (ArrayList<AdministradorModel>) administradorRepository.findAll();
	}
	
	public AdministradorModel guardarAdministrador(AdministradorModel administrador) {
		return administradorRepository.save(administrador);
	}
}