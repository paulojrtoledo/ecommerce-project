package com.dssystem.ecommerce.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ProductCreateDTO {

    @NotBlank(message = "Nome é obrigatório")
    private String name;

    private String description;

    private String imageUrl;

    @NotNull(message = "Preço é obrigatório")
    @Positive(message = "Preço deve ser positivo")
    private BigDecimal price;

    @NotBlank(message = "Categoria é obrigatória")
    private String category;

    @NotNull(message = "Estoque é obrigatório")
    @PositiveOrZero(message = "Estoque não pode ser negativo")
    private Integer stock;
}
