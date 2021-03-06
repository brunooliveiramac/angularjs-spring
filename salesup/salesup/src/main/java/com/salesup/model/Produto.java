package com.salesup.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

@Entity  
@Table(name="produto")
public class Produto implements Serializable{
	 

	private static final long serialVersionUID = 1L;

	private Long codigo;
	
	private String nome;
	 
	private String descricao;	
	
	private BigDecimal valor;
	 
	private BigDecimal valor_custo;
	
	private Date data_cadastro;
	 
	private BigDecimal qtdEstoque;
	
	private Categoria categoria;
	
	private String prod_imagem;
	
	private Venda venda;
	
	@Temporal(TemporalType.TIMESTAMP)
	public Date getData_cadastro() {
		return data_cadastro;
	}
	public void setData_cadastro(Date data_cadastro) {
		this.data_cadastro = data_cadastro;
	}
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getCodigo() {
		return codigo;
	}
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public BigDecimal getValor() {
		return valor;
	}
	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}
	 
	@ManyToOne   
	@JoinColumn(name = "categoria", referencedColumnName= "id", nullable = true) 
	public Categoria getCategoria() {
		return categoria;
	} 
	
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	  
	public BigDecimal getValor_custo() {
		return valor_custo;
	}
	public void setValor_custo(BigDecimal valor_custo) {
		this.valor_custo = valor_custo;
	}
	
	public BigDecimal getQtdEstoque() {
		return qtdEstoque;
	}
	public void setQtdEstoque(BigDecimal qtdEstoque) {
		this.qtdEstoque = qtdEstoque;
	}
	public String getProd_imagem() {
		return prod_imagem;
	}
	public void setProd_imagem(String prod_imagem) {
		this.prod_imagem = prod_imagem;
	}
	
	@ManyToOne 
	@JoinColumn(name = "venda", referencedColumnName= "id", nullable = true)
	public Venda getVenda() {
		return venda;
	}
	public void setVenda(Venda venda) {
		this.venda = venda;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	} 
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Produto other = (Produto) obj; 
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}
	
	 

	@Override
	public String toString() {
		return "Produto [codigo=" + codigo + ", descricao=" + descricao + ", valor=" + valor + ", valor_custo="
				+ valor_custo + ", data_cadastro=" + data_cadastro + ", categoria=" + categoria + "]";
	}

}
