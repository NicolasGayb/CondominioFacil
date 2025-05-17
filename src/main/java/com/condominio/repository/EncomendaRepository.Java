package com.seu_pacote.repository;

import com.seu_pacote.model.Encomenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EncomendaRepository extends JpaRepository<Encomenda, Long> {

    /**
     * Conta quantas encomendas ainda não foram entregues.
     * @return número de encomendas pendentes (entregue = false)
     */
    long countByEntregueFalse();
}
