package com.condominiofacil.controller;

import com.condominiofacil.service.AvisoService;
import com.condominiofacil.service.EncomendaService;
import com.condominiofacil.service.MoradorService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*") // Permite que o React acesse a API
public class DashboardController {

    private final EncomendaService encomendaService;
    private final AvisoService avisoService;
    private final MoradorService moradorService;

    public DashboardController(EncomendaService encomendaService,
                               AvisoService avisoService,
                               MoradorService moradorService) {
        this.encomendaService = encomendaService;
        this.avisoService = avisoService;
        this.moradorService = moradorService;
    }

    /**
     * Retorna os dados resumidos do painel inicial.
     * @return mapa com os contadores
     */
    @GetMapping("/resumo")
    public Map<String, Long> getResumo() {
        Map<String, Long> resumo = new HashMap<>();
        resumo.put("encomendasPendentes", encomendaService.countEncomendasPendentes());
        resumo.put("avisos", avisoService.countAll());
        resumo.put("moradores", moradorService.countAll());
        return resumo;
    }
}