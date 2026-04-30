package com.dssystem.ecommerce.dto;

import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ProductUpdateDTO {

    private String name;

    private String description;

    private String imageUrl;

    private String category;

    @Positive(message = "Preço deve ser positivo")
    private BigDecimal price;

    @PositiveOrZero(message = "Estoque não pode ser negativo")
    private Integer stock;
}
