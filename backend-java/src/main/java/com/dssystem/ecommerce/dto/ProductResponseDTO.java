package com.dssystem.ecommerce.dto;

import com.dssystem.ecommerce.entity.Product;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ProductResponseDTO {

    private Long id;
    private String name;
    private String description;
    private String imageUrl;
    private String category;
    private BigDecimal price;
    private Integer stock;

    public static ProductResponseDTO from(Product product) {
        ProductResponseDTO dto = new ProductResponseDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setImageUrl(product.getImageUrl());
        dto.setCategory(product.getCategory().getName());
        dto.setPrice(product.getPrice());
        dto.setStock(product.getStockQuantity());
        return dto;
    }
}
