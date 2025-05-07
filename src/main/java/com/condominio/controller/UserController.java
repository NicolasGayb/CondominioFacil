package com.condominio.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.condominio.service.UserService;
import com.condominio.model.User;
import java.util.List;

/**
 * Controlador REST para gerenciar requisições relacionadas aos usuários.
 */
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Endpoint GET para listar todos os usuários cadastrados.
     */
    @GetMapping
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    /**
     * Endpoint POST para criar um novo usuário.
     */
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    /**
     * Endpoint POST para login do usuário.
     */
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        User foundUser = userService.findByEmail(user.getEmail());
        if (foundUser != null && foundUser.getSenha().equals(user.getSenha())) {
            return ResponseEntity.ok(foundUser);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}