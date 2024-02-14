
package com.example.demo.services;

import com.example.demo.repositories.*;
import com.example.demo.models.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReseñacafeteriaService{
	
	@Autowired
	ReseñacafeteriaRepository reseñacafeteriaRepository;
	
	public ArrayList<ReseñacafeteriaModel> obtenerReseñacafeterias(){
		return (ArrayList<ReseñacafeteriaModel>) reseñacafeteriaRepository.findAll();
	}
	
	public ReseñacafeteriaModel guardarReseñacafeteria(ReseñacafeteriaModel reseñacafeteria) {
		return reseñacafeteriaRepository.save(reseñacafeteria);
	}

	public Float obtenerPromedioCafeteriaById(Long cafeteriaId) {
		return reseñacafeteriaRepository.calcularCalificacionPromedioPorCafeteria(cafeteriaId);
	}

	public List<ReseñacafeteriaModel> obtenerResenaPorCafeteria(Long cafeteriaId) {
		return reseñacafeteriaRepository.findByCafeteriaId(cafeteriaId);
	}


}