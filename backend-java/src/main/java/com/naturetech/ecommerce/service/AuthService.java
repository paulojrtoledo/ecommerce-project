package com.naturetech.ecommerce.service;

import com.naturetech.ecommerce.dto.AuthResponseDTO;
import com.naturetech.ecommerce.dto.LoginRequestDTO;
import com.naturetech.ecommerce.dto.RegisterRequestDTO;
import com.naturetech.ecommerce.dto.UserResponseDTO;
import com.naturetech.ecommerce.entity.Role;
import com.naturetech.ecommerce.entity.User;
import com.naturetech.ecommerce.repository.UserRepository;
import com.naturetech.ecommerce.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthResponseDTO register(RegisterRequestDTO dto) {
        String email = dto.getEmail();
        if (userRepository.existsByEmailIgnoreCase(email)) {
            throw new IllegalArgumentException("Email já cadastrado");
        }

        User user = new User();
        user.setName(dto.getName());
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setRole(Role.USER);
        user.setActive(true);

        User saved = userRepository.save(user);
        String token = jwtService.generateToken(saved);

        AuthResponseDTO resp = new AuthResponseDTO();
        resp.setToken(token);
        resp.setUser(UserResponseDTO.from(saved));
        return resp;
    }

    public AuthResponseDTO authenticate(LoginRequestDTO dto) {
        User user = userRepository.findByEmailIgnoreCase(dto.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Credenciais inválidas"));

        if (!user.getActive() || !passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Credenciais inválidas");
        }

        String token = jwtService.generateToken(user);

        AuthResponseDTO resp = new AuthResponseDTO();
        resp.setToken(token);
        resp.setUser(UserResponseDTO.from(user));
        return resp;
    }

    public UserResponseDTO me(String email) {
        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));
        return UserResponseDTO.from(user);
    }
}
