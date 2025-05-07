package com.condominio.model;

import jakarta.persistence.*;

// Classe que representa a entidade User no banco de dados.
// Utiliza JPA para mapear a tabela e suas colunas.

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String senha;

    // Getters e Setters
    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public String getNome() {return nome;}
    public void setNome(String nome) {this.nome = nome;}

    public String getEmail() {return email;}
    public void setEmail(String email) {this.email = email;}

    public String getSenha() {return senha;}
    public void setSenha(String senha) {this.senha = senha;}
}