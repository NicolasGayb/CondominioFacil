package com.seuusuario.condominiofacil.controller;

import com.seuusuario.condominiofacil.dto.DashboardInfo;
import com.seuusuario.condominiofacil.repository.EncomendaRepository;
import com.seuusuario.condominiofacil.repository.AvisoRepository;
import com.seuusuario.condominiofacil.repository.MoradorRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final EncomendaRepository encomendaRepository;
    private final AvisoRepository avisoRepository;
    private final MoradorRepository moradorRepository;

    public DashboardController(
            EncomendaRepository encomendaRepository,
            AvisoRepository avisoRepository,
            MoradorRepository moradorRepository) {
        this.encomendaRepository = encomendaRepository;
        this.avisoRepository = avisoRepository;
        this.moradorRepository = moradorRepository;
    }

    @GetMapping
    public DashboardInfo getDashboardInfo() {
        long encomendas = encomendaRepository.countAguardando();
        long avisos = avisoRepository.countNovos();
        long moradores = moradorRepository.countAtivos();

        return new DashboardInfo((int) encomendas, (int) avisos, (int) moradores);
    }
}
