package com.dssystem.ecommerce.dto;

import com.dssystem.ecommerce.entity.Category;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryResponseDTO {

    private Long id;
    private String name;
    private String description;
    private Boolean active;

    public static CategoryResponseDTO from(Category category) {
        CategoryResponseDTO dto = new CategoryResponseDTO();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setDescription(category.getDescription());
        dto.setActive(category.getActive());
        return dto;
    }
}
