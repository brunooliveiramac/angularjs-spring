package com.salesup.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.salesup.model.Categoria;

@Repository 
public interface Categorias extends JpaRepository<Categoria, Long> {

}
