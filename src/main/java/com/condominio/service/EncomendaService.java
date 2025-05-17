package com.condominiofacil.service;

import com.condominiofacil.model.Encomenda;
import com.condominiofacil.repository.EncomendaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EncomendaService {
    private final EncomendaRepository encomendaRepository;

    public EncomendaService(EncomendaRepository encomendaRepository){
        this.encomendaRepository = encomendaRepository;
    }
    /**
     * Retorna todas as encomendas do banco.
     * @Return lista de encomendas
     */
    public list<Encomenda> findAll() {
        return encomendaRepository.findAll();
    }

    /**
     * Conta quantas encomendas ainda estão pendentes de entrega
     * @Return número de encomendas pendentes
     */
    public long countEncomendasPendentes() {
        return encomendaRepository.countByEntregueFalse();
    }
}