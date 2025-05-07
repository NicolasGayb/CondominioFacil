package com.condominio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.condominio.model.User;

/**
 * Repositório de usuários para acesso ao banco de dados.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}