
package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "usuario")
public class UsuarioModel{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Nombre", nullable = false)
    private String nombre;

    @Column(name = "CorreoElectronico", nullable = false)
    private String correoElectronico;

    @Column(name = "Contrasena", nullable = false)
    private String contrasena;

	@Column(name = "Tipo", nullable = false)
    private String tipo;

    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreoElectronico() {
		return correoElectronico;
	}

	public void setCorreoElectronico(String correoElectronico) {
		this.correoElectronico = correoElectronico;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}
	
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
    
}