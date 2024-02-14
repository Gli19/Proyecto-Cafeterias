
package com.example.demo.repositories;

import com.example.demo.models.*;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductoRepository extends CrudRepository<ProductoModel, Long> {
    List<ProductoModel> findByCafeteriaId(Long cafeteriaId);
     
}