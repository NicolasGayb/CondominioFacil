package com.seuusuario.condominiofacil.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "avisos")
public class Aviso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mensagem;

    private boolean novo;

    private LocalDateTime dataCriacao;

    public Aviso() {}

    // Getters e setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getMensagem() { return mensagem; }
    public void setMensagem(String mensagem) { this.mensagem = mensagem; }

    public boolean isNovo() { return novo; }
    public void setNovo(boolean novo) { this.novo = novo; }

    public LocalDateTime getDataCriacao() { return dataCriacao; }
    public void setDataCriacao(LocalDateTime dataCriacao) { this.dataCriacao = dataCriacao; }
}
