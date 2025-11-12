package com.condominio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador para testar a conexão com o banco de dados.
 */
@RestController
@RequestMapping("/db-test")
public class DatabaseTestController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping
    public String testConnection() {
        try {
            jdbcTemplate.execute("SELECT 1");
            return "Conexão com o banco de dados bem-sucedida!";
        } catch (Exception e) {
            return "Erro ao conectar com o banco de dados: " + e.getMessage();
        }
    }
}
