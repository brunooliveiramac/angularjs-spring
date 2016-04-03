package com.salesup.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name ="categoria")
public class Categoria implements Serializable{
	  	

	private static final long serialVersionUID = 1L;
 
	
	private Long id; 
	private String descricao; 
	
	 
	@Id  
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getId() {
		return id;
	} 

	public void setId(Long id) {
		this.id = id;
	}
 
	public String getDescricao() {
		return descricao;
	}
 
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	

	

}
