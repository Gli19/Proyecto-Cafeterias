
package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "reseñacafeteria")
public class ReseñacafeteriaModel{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Calificacion", nullable = false)
    private Double calificacion;

    @Column(name = "Comentario", columnDefinition = "TEXT")
    private String comentario;

    @ManyToOne
    @JoinColumn(name = "CafeteriaID")
    private CafeteriaModel cafeteria;

    @ManyToOne
    @JoinColumn(name = "UsuarioID")
    private UsuarioModel usuario;

    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getCalificacion() {
		return calificacion;
	}

	public void setCalificacion(Double calificacion) {
		this.calificacion = calificacion;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public CafeteriaModel getCafeteria() {
		return cafeteria;
	}

	public void setCafeteria(CafeteriaModel cafeteria) {
		this.cafeteria = cafeteria;
	}

	public UsuarioModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioModel usuario) {
		this.usuario = usuario;
	}
    
}