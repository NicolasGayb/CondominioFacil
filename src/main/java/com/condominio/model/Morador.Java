package com.porteirodigital.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

/**
 * Representa um morador do condomínio.
 */
@Entity
public class Morador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String nome;

    @Column(length = 50, nullable = false)
    private String apartamento;

    @Column(length = 100)
    private String email;

    public Morador() {}

    public Morador(String nome, String apartamento, String email) {
        this.nome = nome;
        this.apartamento = apartamento;
        this.email = email;
    }

    // Getters e setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getApartamento() { return apartamento; }
    public void setApartamento(String apartamento) { this.apartamento = apartamento; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
