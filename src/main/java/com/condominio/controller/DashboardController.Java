package com.NicolasGayb.CondominioFacil.controller;

import com.NicolasGayb.CondominioFacil.dto.DashboardInfo;
import com.NicolasGayb.CondominioFacil.repository.EncomendaRepository;
import com.NicolasGayb.CondominioFacil.repository.AvisoRepository;
import com.NicolasGayb.CondominioFacil.repository.MoradorRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000") // Libera acesso do frontend React na porta 3000
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    // Repositórios para acessar dados no banco
    private final EncomendaRepository encomendaRepository;
    private final AvisoRepository avisoRepository;
    private final MoradorRepository moradorRepository;

    // Injeção de dependências via construtor
    public DashboardController(
            EncomendaRepository encomendaRepository,
            AvisoRepository avisoRepository,
            MoradorRepository moradorRepository) {
        this.encomendaRepository = encomendaRepository;
        this.avisoRepository = avisoRepository;
        this.moradorRepository = moradorRepository;
    }

    // Endpoint GET /api/dashboard que retorna os dados do dashboard em JSON
    @GetMapping
    public DashboardInfo getDashboardInfo() {
        // Busca a contagem de encomendas aguardando no banco
        long encomendas = encomendaRepository.countAguardando();

        // Busca a contagem de avisos novos no banco
        long avisos = avisoRepository.countNovos();

        // Busca a contagem de moradores ativos no banco
        long moradores = moradorRepository.countAtivos();

        // Retorna um DTO com as contagens
        return new DashboardInfo((int) encomendas, (int) avisos, (int) moradores);
    }
}
