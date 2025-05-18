package com.condominio.service;

import com.condominiofacil.model.Aviso;
import com.condominiofacil.repository.AvisoRepository;
import org.springframework.stereotype.Service

import java.util.List;

@Service
public class AvisoService {
    private final AvisoRepository avisoRepository;

    public AvisoService(AvisoRepository avisoRepository) {
        this.avisoRepository = avisoRepository;
    }
    /**
     * Retorna todos os avisos cadastrados
     * @Return lista de avisos
     */
    public List<Aviso> findAll() {
        return avisoRepository.findAll();
    }
    /**
     * Conta todos os avisos cadastrados.
     * @Return número total de avisos
     */
    public long countAll() {
        return avisoRepository.count();
    }
}