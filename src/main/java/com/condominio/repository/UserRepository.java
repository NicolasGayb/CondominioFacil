package com.condominio.model;

import org.springframework.data.jpa.repository.JpaRepository;
import com.condominio.model.User;

/**
 * Interface que define operações no banco de dados
 * JPA Repository já contém métodos prontos para CRUD.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}