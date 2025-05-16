// MoradorRepository.java
package com.porteirodigital.repository;

import com.porteirodigital.model.Morador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoradorRepository extends JpaRepository<Morador, Long> {}
