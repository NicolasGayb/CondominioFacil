package com.condominio.controller;

import org.springframework.web.bind.annotation.*;
import com.condominio.service.UserService;
import com.condominio.model.User;
import java.util.List;

/**
 * Classe que define as requisições HTTP para gerenciar usuários.
 * Define os endpoints da API REST
 */
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
