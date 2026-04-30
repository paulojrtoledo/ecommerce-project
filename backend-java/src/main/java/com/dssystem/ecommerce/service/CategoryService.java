package com.dssystem.ecommerce.service;

import com.dssystem.ecommerce.dto.CategoryRequestDTO;
import com.dssystem.ecommerce.dto.CategoryResponseDTO;
import com.dssystem.ecommerce.entity.Category;
import com.dssystem.ecommerce.exception.ResourceNotFoundException;
import com.dssystem.ecommerce.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<CategoryResponseDTO> findAll() {
        return categoryRepository.findAll()
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
