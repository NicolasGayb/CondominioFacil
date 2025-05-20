package com.condominio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.condominio.model.morador;

public interface MoradorRepository extends JpaRepository<morador, Long> {
    long countByAtivoTrue();
}
