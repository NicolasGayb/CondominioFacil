package com.condominio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.condominio.model.Encomenda;

public interface EncomendaRepository extends JpaRepository<Encomenda, Long> {
    long countByRetiradaFalse();
}
