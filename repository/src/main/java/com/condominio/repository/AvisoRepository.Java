package com.condominio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.condominio.model.aviso;

public interface AvisoRepository extends JpaRepository<aviso, Long> {
    long countByLidoFalse();
}
