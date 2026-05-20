package com.naturetech.ecommerce.service;

import com.naturetech.ecommerce.dto.CategoryRequestDTO;
import com.naturetech.ecommerce.dto.CategoryResponseDTO;
import com.naturetech.ecommerce.entity.Category;
import com.naturetech.ecommerce.exception.ResourceNotFoundException;
import com.naturetech.ecommerce.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<CategoryResponseDTO> findAll() {
        return categoryRepository.findByActiveTrue()
            .stream()
            .map(CategoryResponseDTO::from)
            .toList();
    }

    public CategoryResponseDTO create(CategoryRequestDTO dto) {
        Category category = new Category();
        category.setName(dto.getName());
        category.setDescription(dto.getDescription());
        return CategoryResponseDTO.from(categoryRepository.save(category));
    }

    public Category findEntityById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrada com id: " + id));
    }

    public Category findOrCreateByName(String name) {
        return categoryRepository.findByNameIgnoreCase(name)
                .orElseGet(() -> {
                    Category category = new Category();
                    category.setName(name);
                    return categoryRepository.save(category);
                });
    }
}
