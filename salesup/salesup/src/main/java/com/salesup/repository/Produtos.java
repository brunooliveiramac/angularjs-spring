package com.salesup.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.salesup.model.Produto;
  
@Repository 
public interface Produtos extends JpaRepository<Produto, String> {

	Produto findByCodigo(Long codigo); 

}
