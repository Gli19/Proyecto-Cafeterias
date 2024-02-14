
package com.example.demo.repositories;

import com.example.demo.models.*;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface ReseñacafeteriaRepository extends CrudRepository<ReseñacafeteriaModel, Long> {
	
    List<ReseñacafeteriaModel> findByCafeteriaId(Long cafeteriaId);

    @Query("SELECT ROUND(AVG(r.calificacion),1) FROM ReseñacafeteriaModel r WHERE r.cafeteria.id = :cafeteriaId")
    Float calcularCalificacionPromedioPorCafeteria(@Param("cafeteriaId") Long cafeteriaId);
}