package com.condominio;

import com.condominio.model.User;
import com.condominio.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());
        if (userOpt.isPresent() && userOpt.get().getPassword().equals(loginRequest.getPassword())) {
            User user = userOpt.get();
            String tipo = user.getTipo();
            return ResponseEntity.ok().body(tipo);
        } else {
            return ResponseEntity.status(401).body("Usuário ou senha inválidos");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        user.setTipo("morador");
        userRepository.save(user);
        return ResponseEntity.ok().body("Usuário cadastrado com sucesso como morador.");
    }
}
