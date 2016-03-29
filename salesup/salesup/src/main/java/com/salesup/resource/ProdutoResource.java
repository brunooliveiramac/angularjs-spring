package com.salesup.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.salesup.model.Produto;
import com.salesup.repository.Produtos;
import com.salesup.service.ProdutoService;

@RestController
@RequestMapping("/produtos")
public class ProdutoResource { 
	
	
	@Autowired
	private ProdutoService produtoService;
	
	 
	@RequestMapping(method=RequestMethod.GET, produces="application/json")
	public List<Produto> list() {
		return produtoService.listar();
	}
	
	@RequestMapping(method=RequestMethod.POST, consumes="application/json")
 	public ResponseEntity<?> add(@RequestBody Produto produto){
		produtoService.add(produto);
		  
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setLocation(ServletUriComponentsBuilder 
				.fromCurrentRequest().path("/{id}")  
				.buildAndExpand(produto.getCodigo()).toUri());
		
		return new ResponseEntity<>(null, httpHeaders, HttpStatus.CREATED);
	}
	 
	@RequestMapping(value="/{id}", method=RequestMethod.GET, produces="application/json")
	public Produto porId(@PathVariable("id") Long id){
		return produtoService.porId(id); 
	}
	
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<?> remove(@PathVariable("id") Long id) {
		produtoService.remove(id); 
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.PUT, consumes="application/json")
	public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody Produto produto){
		produtoService.update(id, produto);  
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
			
}
