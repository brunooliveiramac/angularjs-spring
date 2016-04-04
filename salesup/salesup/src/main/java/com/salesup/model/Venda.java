package com.salesup.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="venda")
public class Venda {
	
	@Id
	@GeneratedValue 
	private Long id;
	
	@ManyToOne 
	@JoinColumn(name = "user", nullable = false)
	private User user;  
	
	@OneToMany(mappedBy = "venda", targetEntity = Produto.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
	private List<Produto> produtos = new ArrayList<>();
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date data_venda; 
	
	private BigDecimal total = BigDecimal.ZERO;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public User getCliente() {
		return user;
	}
	public void setCliente(User user) {
		this.user = user;
	}
	public List<Produto> getProdutos() {
		return produtos;
	}
	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}
	public Date getData_venda() {
		return data_venda;
	}
	public void setData_venda(Date data_venda) {
		this.data_venda = data_venda;
	}
	
	public BigDecimal getTotal() {
		return total;
	}
	public void setTotal(BigDecimal total) {
		this.total = total;
	}
	
		
}
