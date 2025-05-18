package com.condominio.service;

import com.condominio.model.User;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final List<User> users = new ArrayList<>();

    public List<User> findAll() {
        return users;
    }
    public void save(User user) {
        users.add(user);
    }
}
