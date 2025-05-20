package com.condominio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

/**
 * Classe principal do Spring Boot que inicia a aplicação.
 */
@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.condominio.repository")
@EntityScan(basePackages = "com.condominio.model")
public class CondominioFacilApplication {
    public static void main(String[] args) {
        SpringApplication.run(CondominioFacilApplication.class, args);
    }
}