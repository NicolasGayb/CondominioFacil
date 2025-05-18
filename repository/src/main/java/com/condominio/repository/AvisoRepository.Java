package com.condominio.repository;

import com.condominio.model.Aviso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvisoRepository extends JpaRepository<Aviso, Long> {
    long countByLidoFalse();
}
