package com.salesup.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesup.model.Produto;
import com.salesup.repository.Produtos;

@Service
public class ProdutoService {

	
	@Autowired
	private Produtos produtos;
	
	public void add(Produto produto) {
		produtos.save(produto);  
	}
 
	public Produto porId(Long codigo) {
		return produtos.findByCodigo(codigo);
	}

	public List<Produto> listar() {
		List<Produto> list = produtos.findAll();
		return list; 
	}

	public void remove(Long id) {
		Produto produto = new Produto();
		produto = produtos.findByCodigo(id);
		produtos.delete(produto); 
	}

	public void update(Long id, Produto produto) {
		produtos.saveAndFlush(produto); 
	}

}
 