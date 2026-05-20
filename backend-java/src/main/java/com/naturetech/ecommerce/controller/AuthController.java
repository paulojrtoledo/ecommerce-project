package com.naturetech.ecommerce.controller;

import com.naturetech.ecommerce.dto.AuthResponseDTO;
import com.naturetech.ecommerce.dto.LoginRequestDTO;
import com.naturetech.ecommerce.dto.RegisterRequestDTO;
import com.naturetech.ecommerce.dto.UserResponseDTO;
import com.naturetech.ecommerce.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDTO> register(@RequestBody @Valid RegisterRequestDTO dto) {
        return ResponseEntity.ok(authService.register(dto));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody @Valid LoginRequestDTO dto) {
        return ResponseEntity.ok(authService.authenticate(dto));
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponseDTO> me(Authentication authentication) {
        if (authentication == null || authentication.getName() == null) {
            return ResponseEntity.status(401).build();
        }
        return ResponseEntity.ok(authService.me(authentication.getName()));
    }
}
