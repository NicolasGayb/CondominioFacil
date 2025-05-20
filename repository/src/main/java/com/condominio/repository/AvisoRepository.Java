package com.condominio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.condominio.model.Aviso;

public interface AvisoRepository extends JpaRepository<Aviso, Long> {
    long countByLidoFalse();
}
