package com.condominio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.condominio.model.encomenda;

public interface EncomendaRepository extends JpaRepository<encomenda, Long> {
    long countByRetiradaFalse();
}
