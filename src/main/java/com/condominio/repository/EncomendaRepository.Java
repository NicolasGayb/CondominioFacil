// EncomendaRepository.java
package com.porteirodigital.repository;

import com.porteirodigital.model.Encomenda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EncomendaRepository extends JpaRepository<Encomenda, Long> {}
