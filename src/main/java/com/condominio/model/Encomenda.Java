package com.condominio.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

/**
 * A classe Encomenda representa uma encomenda recebida no condomínio.
 * Ela será mapeada para uma tabela no banco de dados.
 */
@Entity // Indica que esta classe é uma entidade JPA (será mapeada para uma tabela do banco)
public class Encomenda {

    @Id // Indica que este campo é a chave primária da tabela
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Gera o ID automaticamente (auto-increment)
    private Long id;

    @Column(length = 100, nullable = false) // Define coluna com até 100 caracteres e obrigatória
    private String destinatario;

    @Column(length = 255) // Define coluna com até 255 caracteres (opcional)
    private String descricao;

    @Column(length = 30) // Define coluna com até 30 caracteres (exemplo: "aguardando", "retirada")
    private String status;

    // Construtor padrão exigido pelo JPA
    public Encomenda() {}

    // Construtor para facilitar criação de objetos Encomenda
    public Encomenda(String destinatario, String descricao, String status) {
        this.destinatario = destinatario;
        this.descricao = descricao;
        this.status = status;
    }

    // Getters e setters para todos os campos

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDestinatario() {
        return destinatario;
    }

    public void setDestinatario(String destinatario) {
        this.destinatario = destinatario;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }