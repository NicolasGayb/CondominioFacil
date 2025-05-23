package com.condominio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.condominio.model.Encomenda;
import com.condominio.repository.EncomendaRepository;

@Service
public class EncomendaService {
    private final EncomendaRepository encomendaRepository;

    public EncomendaService(EncomendaRepository encomendaRepository){
        this.encomendaRepository = encomendaRepository;
    }
    /**
     * Retorna todas as encomendas do banco.
     * @return lista de encomendas
     */
    public List<Encomenda> findAll() {
        return encomendaRepository.findAll();
    }

    /**
     * Conta quantas encomendas ainda estão pendentes de entrega
     * @return número de encomendas pendentes
     */
    public long countEncomendasPendentes() {
        return encomendaRepository.countByRetiradaFalse();
    }
}