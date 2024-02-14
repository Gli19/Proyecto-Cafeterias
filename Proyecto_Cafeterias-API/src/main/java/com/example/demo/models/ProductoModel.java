
package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "producto")
public class ProductoModel{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;
	
	@ManyToOne
    @JoinColumn(name = "CafeteriaID")
    private CafeteriaModel cafeteria;

    @Column(name = "Nombre", nullable = false)
    private String nombre;

    @Column(name = "Descripcion", columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "Precio")
    private Double precio;

    @Column(name = "CalificacionPromedio")
    private Double calificacionPromedio;
    
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

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Double getCalificacionPromedio() {
		return calificacionPromedio;
	}

	public void setCalificacionPromedio(Double calificacionPromedio) {
		this.calificacionPromedio = calificacionPromedio;
	}
	public CafeteriaModel getCafeteria() {
		return cafeteria;
	}

	public void setCafeteria(CafeteriaModel cafeteria) {
		this.cafeteria = cafeteria;
	}
	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
    
}