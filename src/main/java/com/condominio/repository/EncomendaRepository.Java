// EncomendaRepository.java
package com.porteirodigital.repository;

import com.porteirodigital.model.Encomenda;
import org.springframework.data.jpa.repository.JpaRepository;

public interfpackage com.seuusuario.condominiofacil.repository;

import com.seuusuario.condominiofacil.model.Encomenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EncomendaRepository extends JpaRepository<Encomenda, Long> {

    @Query("SELECT COUNT(e) FROM Encomenda e WHERE e.aguardando = true")
    long countAguardando();

}
ace EncomendaRepository extends JpaRepository<Encomenda, Long> {}
