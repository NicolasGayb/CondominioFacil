package com.condominiofacil.controller;

import com.condominiofacil.repository.EncomendaRepository;
import com.condominiofacil.repository.AvisoRepository;
import com.condominiofacil.repository.MoradorRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class DashboardController {

    private final EncomendaRepository encomendaRepository;
    private final AvisoRepository avisoRepository;
    private final MoradorRepository moradorRepository;

    public DashboardController(
        EncomendaRepository encomendaRepository,
        AvisoRepository avisoRepository,
        MoradorRepository moradorRepository
    ) {
        this.encomendaRepository = encomendaRepository;
        this.avisoRepository = avisoRepository;
        this.moradorRepository = moradorRepository;
    }

    @GetMapping("/api/dashboard")
    public Map<String, Long> getDashboardData() {
        Map<String, Long> data = new HashMap<>();
        data.put("encomendas", encomendaRepository.count());
        data.put("avisos", avisoRepository.count());
        data.put("moradores", moradorRepository.count());
        return data;
    }
}
