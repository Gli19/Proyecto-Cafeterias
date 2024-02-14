
package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "cafeteria")
public class CafeteriaModel{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Nombre", nullable = false)
    private String nombre;

    @Column(name = "Direccion", nullable = false)
    private String direccion;

    @Column(name = "Descripcion", columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "calificacion_promedio")
    private Double calificacion_promedio;
    
    @Column(name = "Imagen", columnDefinition = "TEXT")
    private String imagen;

    
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

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Double getCalificacionPromedio() {
		return calificacion_promedio;
	}

	public void setCalificacionPromedio(Double calificacionPromedio) {
		this.calificacion_promedio = calificacionPromedio;
	}
	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
    
}