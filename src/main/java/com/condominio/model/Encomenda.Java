package com.porteirodigital.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

/**
 * Representa uma encomenda recebida no condomínio.
 */
@Entity
public class Encomenda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String destinatario;

    @Column(length = 255)
    private String descricao;

    @Column(length = 30)
    private String status;

    public Encomenda() {}

    public Encomenda(String destinatario, String descricao, String status) {
        this.destinatario = destinatario;
        this.descricao = descricao;
        this.status = status;
    }

    // Getters e setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDestinatario() { return destinatario; }
    public void setDestinatario(String destinatario) { this.destinatario = destinatario; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
