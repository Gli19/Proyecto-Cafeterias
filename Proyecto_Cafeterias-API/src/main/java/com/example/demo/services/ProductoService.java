
package com.example.demo.services;

import com.example.demo.repositories.*;
import com.example.demo.models.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class ProductoService{
	
	@Autowired
	ProductoRepository productoRepository;

	@Autowired
	ReseñaproductoRepository resenaproductoRepository;
	
	@Autowired
	ReseñaproductoService resenaproductoService;

	public ArrayList<ProductoModel> obtenerProductos(){
		return (ArrayList<ProductoModel>) productoRepository.findAll();
	}
	
	public ProductoModel guardarProducto(ProductoModel producto) {
		return productoRepository.save(producto);
	}


	public ProductoModel findById(Long id) {
        return productoRepository.findById(id).orElse(null); //si no llega sera nulo
    }
	
	public List<ProductoModel> obtenerProductosPorCafeteria(Long cafeteriaId) {
		return productoRepository.findByCafeteriaId(cafeteriaId);
	}

	public ProductoModel editarProduct(Long id,ProductoModel pm){
		ProductoModel p =productoRepository.findById(id).orElse(null);

		if (pm.getNombre() != null) {
			p.setNombre(pm.getNombre());
		}

		if (pm.getPrecio() != null) {
			p.setPrecio(pm.getPrecio());
		}

		if (pm.getDescripcion() != null) {
			p.setDescripcion(pm.getDescripcion());
		}

		if (pm.getImagen() != null) {
			p.setImagen(pm.getImagen());
		}

		ProductoModel actualizado = productoRepository.save(p);
		return actualizado;
	}

	public ProductoModel eliminarProducto(Long id){
	ProductoModel p	= productoRepository.findById(id).orElse(null);

	List<ReseñaproductoModel> reseñaproductomodel =resenaproductoService.obtenerResenaPorProducto(id);


	for(ReseñaproductoModel reseñaproducto : reseñaproductomodel){
			reseñaproducto.setProducto(null);
			resenaproductoService.guardarReseñaproducto(reseñaproducto);
	}
			productoRepository.deleteById(id);
		return p;
	}

	

	

	}


