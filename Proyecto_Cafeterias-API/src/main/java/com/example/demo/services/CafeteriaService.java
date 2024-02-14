
package com.example.demo.services;

import com.example.demo.repositories.*;
import com.example.demo.models.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CafeteriaService{
	
	@Autowired
	CafeteriaRepository cafeteriaRepository;

	@Autowired
	ProductoService productoService;

	@Autowired
	ProductoRepository productoRepository;
	
	public ArrayList<CafeteriaModel> obtenerCafeterias(){
		return (ArrayList<CafeteriaModel>) cafeteriaRepository.findAll();
	}
	
	public CafeteriaModel guardarCafeteria(CafeteriaModel cafeteria) {
		return cafeteriaRepository.save(cafeteria);
	}

	public CafeteriaModel findById(Long id) {
        return cafeteriaRepository.findById(id).orElse(null); //si no llega sera nulo
    }

	public CafeteriaModel obtenerCaf(Long id,CafeteriaModel pm){
		CafeteriaModel p =cafeteriaRepository.findById(id).orElse(null);

		if (pm.getNombre() != null) {
			p.setNombre(pm.getNombre());
		}

		if (pm.getDireccion() != null) {
			p.setDireccion(pm.getDireccion());
		}

		if (pm.getDescripcion() != null) {
			p.setDescripcion(pm.getDescripcion());
		}

		if (pm.getImagen() != null) {
			p.setImagen(pm.getImagen());
		}

		CafeteriaModel actualizado = cafeteriaRepository.save(p);
		return actualizado;
	}

	public CafeteriaModel eliminarCafe(Long id){
		CafeteriaModel p= cafeteriaRepository.findById(id).orElse(null);
			
		 List<ProductoModel> productos = productoService.obtenerProductosPorCafeteria(id);

		 for(ProductoModel pro : productos){
			pro.setCafeteria(null);
			productoRepository.save(pro);
		 }

			cafeteriaRepository.deleteById(id);
			return p;
		}
}