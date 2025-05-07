package com.condominio.service;

import org.springframework.stereotype.Service;
import com.condominio.repository.UserRepository;
import com.condominio.model.User;
import java.util.List;

/**
 * Classe que gerencia a lógica de negócio relacionada aos usuários.
 * Aplica regras e validações antes de interagir com o banco de dados.
 */
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }
}