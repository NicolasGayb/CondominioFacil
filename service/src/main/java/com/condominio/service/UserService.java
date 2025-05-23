package com.condominio.service;

import com.condominio.model.User;
import com.condominio.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }
    public void save(User user) {
        userRepository.save(user);
    }
}
