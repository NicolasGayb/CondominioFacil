package com.seuusuario.condominiofacil.repository;

import com.seuusuario.condominiofacil.model.Aviso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AvisoRepository extends JpaRepository<Aviso, Long> {

    @Query("SELECT COUNT(a) FROM Aviso a WHERE a.novo = true")
    long countNovos();

}
