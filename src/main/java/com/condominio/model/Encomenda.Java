package com.seuusuario.condominiofacil.model;

import jakarta.persistence.*;

@Entity
@Table(name = "encomendas")
public class Encomenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;

    private boolean aguardando;

    // Construtor vazio para JPA
    public Encomenda() {}

    // Getters e setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public boolean isAguardando() { return aguardando; }
    public void setAguardando(boolean aguardando) { this.aguardando = aguardando; }
}
