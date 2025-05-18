package com.condominio.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Encomenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descricao;
    private boolean retirada;
    private LocalDateTime dataRecebimento;
    @ManyToOne
    private Morador morador;

    // Getters e setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public boolean isRetirada() {
        return retirada;
    }
    public void setRetirada(boolean retirada) {
        this.retirada = retirada;
    }
    public LocalDateTime getDataRecebimento() {
        return dataRecebimento;
    }
    public void setDataRecebimento(LocalDateTime dataRecebimento) {
        this.dataRecebimento = dataRecebimento;
    }
    public Morador getMorador() {
        return morador;
    }
    public void setMorador(Morador morador) {
        this.morador = morador;
    }
}
