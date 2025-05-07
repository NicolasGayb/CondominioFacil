package com.condominio.service;

import org.springframework.stereotype.Service;
import com.condominio.repository.UserRepository;
import com.condominio.model.User;
import java.util.List;

/**
 * Classe de serviço responsável pela lógica de negócios do usuário.
 */
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}