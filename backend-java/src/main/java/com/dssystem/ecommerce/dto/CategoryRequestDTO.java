package com.dssystem.ecommerce.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryRequestDTO {

    @NotBlank(message = "Nome é obrigatório")
    private String name;

    private String description;
}
