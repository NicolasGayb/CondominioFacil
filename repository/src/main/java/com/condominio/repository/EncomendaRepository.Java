package com.condominio.repository;

import com.condominio.model.Encomenda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EncomendaRepository extends JpaRepository<Encomenda, Long> {
    long countByRetiradaFalse();
}
