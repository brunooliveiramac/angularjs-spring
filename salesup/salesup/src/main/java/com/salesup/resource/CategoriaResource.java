package com.salesup.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.salesup.model.Categoria;
import com.salesup.repository.Categorias;

@RestController 
@RequestMapping("/categorias")
public class CategoriaResource {
	 
	@Autowired
	private Categorias categorias;
	
	@RequestMapping(method=RequestMethod.GET, produces="application/json") 
	public List<Categoria> list(){
		return categorias.findAll();
	}

}
