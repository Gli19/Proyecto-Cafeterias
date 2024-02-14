
package com.example.demo.repositories;

import com.example.demo.models.*;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel, Long> {
    UsuarioModel findByCorreoElectronicoAndContrasena(String correoElectronico, String contrasena);
}