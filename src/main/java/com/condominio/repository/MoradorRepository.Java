package com.seuusuario.condominiofacil.repository;

import com.seuusuario.condominiofacil.model.Morador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MoradorRepository extends JpaRepository<Morador, Long> {

    @Query("SELECT COUNT(m) FROM Morador m WHERE m.ativo = true")
    long countAtivos();

}
