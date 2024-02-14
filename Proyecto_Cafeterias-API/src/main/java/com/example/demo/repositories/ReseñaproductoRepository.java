
package com.example.demo.repositories;

import com.example.demo.models.*;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface ReseñaproductoRepository extends CrudRepository<ReseñaproductoModel, Long> {
	List<ReseñaproductoModel> findByProductoId(Long productoId);

	@Query("SELECT ROUND(AVG(r.calificacion),1) FROM ReseñaproductoModel r WHERE r.producto.id = :productoId")
    Float calcularCalificacionPromedioPorProducto(@Param("productoId") Long productoId);
}