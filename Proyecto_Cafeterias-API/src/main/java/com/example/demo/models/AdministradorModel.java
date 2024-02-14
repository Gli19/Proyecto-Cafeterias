
package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "administrador")
public class AdministradorModel{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NombreUsuario", nullable = false)
    private String nombreUsuario;

    @Column(name = "Contrasena", nullable = false)
    private String contrasena;

    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}
    
}