package com.condominio.service;

import com.condominio.repository.MoradorRepository;
import org.springframework.stereotype.Service;

@Service
public class MoradorService {

    private final MoradorRepository moradorRepository;

    public MoradorService(MoradorRepository moradorRepository) {
        this.moradorRepository = moradorRepository;
    }

    /**
     * Retorna o número total de moradores cadastrados.
     * @return número de moradores
     */
    public long countAll() {
        return moradorRepository.count();
    }
}
