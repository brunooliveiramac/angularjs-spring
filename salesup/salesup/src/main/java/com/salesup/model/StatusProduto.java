package com.salesup.model;

public enum StatusProduto {
	
	NORMAL("Normal"),
	BAIXO("Baixo");
	
	private String descricao;
	
	StatusProduto(String descricao) {
		this.descricao = descricao;
	}
	
	public String getDescricao() {
		return descricao;
	}

}
