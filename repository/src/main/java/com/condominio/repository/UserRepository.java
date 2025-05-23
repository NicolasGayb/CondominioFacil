package com.condominio.repository;

import com.condominio.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Métodos customizados podem ser adicionados aqui
}
