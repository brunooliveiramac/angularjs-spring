package com.salesup.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.salesup.model.Produto;
import com.salesup.model.StatusProduto;

@Controller
@RequestMapping("/produtos")
public class ProdutosController {
	 
	@RequestMapping("/novo")
	public ModelAndView novo(){
		ModelAndView mv = new ModelAndView("CadastroProduto");
		mv.addObject(new Produto());
		return mv;
		
	}
	
	
	@ModelAttribute("todosStatusProduto")
	public List<StatusProduto> todosStatus(){
		return Arrays.asList(StatusProduto.values());
	}
 	

}
