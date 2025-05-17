package com.seuusuario.condominiofacil.controller;

import com.seuusuario.condominiofacil.dto.DashboardInfo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @GetMapping
    public DashboardInfo getDashboardInfo() {
        // Simulando dados por enquanto. Depois integramos com o banco.
        return new DashboardInfo(7, 5, 48);
    }
}
