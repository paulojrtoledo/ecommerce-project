package com.dssystem.ecommerce.service;

import com.dssystem.ecommerce.dto.ProductCreateDTO;
import com.dssystem.ecommerce.dto.ProductResponseDTO;
import com.dssystem.ecommerce.dto.ProductUpdateDTO;
import com.dssystem.ecommerce.entity.Category;
import com.dssystem.ecommerce.entity.Product;
import com.dssystem.ecommerce.exception.ResourceNotFoundException;
import com.dssystem.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryService categoryService;

    public List<ProductResponseDTO> findAll() {
        return productRepository.findByActiveTrue()
                .stream()
                .map(ProductResponseDTO::from)
                .toList();
    }

    public ProductResponseDTO findById(Long id) {
        Product product = getActiveProductOrThrow(id);
        return ProductResponseDTO.from(product);
    }

    public ProductResponseDTO create(ProductCreateDTO dto) {
        Category category = categoryService.findOrCreateByName(dto.getCategory());

        Product product = new Product();
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setImageUrl(dto.getImageUrl());
        product.setPrice(dto.getPrice());
        product.setStockQuantity(dto.getStock());
        product.setCategory(category);

        return ProductResponseDTO.from(productRepository.save(product));
    }

    public ProductResponseDTO update(Long id, ProductUpdateDTO dto) {
        Product product = getActiveProductOrThrow(id);

        if (dto.getName() == null
                && dto.getDescription() == null
                && dto.getImageUrl() == null
                && dto.getCategory() == null
                && dto.getPrice() == null
                && dto.getStock() == null) {
            throw new IllegalArgumentException("Faltam informações do produto");
        }

        if (dto.getName() != null) product.setName(dto.getName());
        if (dto.getDescription() != null) product.setDescription(dto.getDescription());
        if (dto.getImageUrl() != null) product.setImageUrl(dto.getImageUrl());
        if (dto.getPrice() != null) product.setPrice(dto.getPrice());
        if (dto.getStock() != null) product.setStockQuantity(dto.getStock());
        if (dto.getCategory() != null) {
            product.setCategory(categoryService.findOrCreateByName(dto.getCategory()));
        }

        return ProductResponseDTO.from(productRepository.save(product));
    }

    public void delete(Long id) {
        Product product = getActiveProductOrThrow(id);
        product.setActive(false);
        productRepository.save(product);
    }

    private Product getActiveProductOrThrow(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado com id: " + id));

        if (!product.getActive()) {
            throw new ResourceNotFoundException("Produto não encontrado com id: " + id);
        }

        return product;
    }
}
