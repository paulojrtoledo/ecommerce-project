package com.dssystem.ecommerce.repository;

import com.dssystem.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByActiveTrue();

    Optional<Product> findByNameIgnoreCase(String name);
}
