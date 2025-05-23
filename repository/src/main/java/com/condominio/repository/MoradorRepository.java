package com.condominio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.condominio.model.Morador;

public interface MoradorRepository extends JpaRepository<Morador, Long> {
    long countByAtivoTrue();
}
