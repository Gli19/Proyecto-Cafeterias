
package com.example.demo.services;

import com.example.demo.repositories.*;
import com.example.demo.models.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReseñaproductoService{
	
	@Autowired
	ReseñaproductoRepository reseñaproductoRepository;
	
	public ArrayList<ReseñaproductoModel> obtenerReseñaproductos(){
		return (ArrayList<ReseñaproductoModel>) reseñaproductoRepository.findAll();
	}
	
	public ReseñaproductoModel guardarReseñaproducto(ReseñaproductoModel reseñaproducto) {
		return reseñaproductoRepository.save(reseñaproducto);
	}

		public List<ReseñaproductoModel> obtenerResenaPorProducto(Long productoId) {
		return reseñaproductoRepository.findByProductoId(productoId);
	}

	public Float obtenerPromedioProductoById(Long productoId) {
		return reseñaproductoRepository.calcularCalificacionPromedioPorProducto(productoId);
	}

}