package com.dssystem.ecommerce.repository;

import com.dssystem.ecommerce.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {

	Optional<Category> findByNameIgnoreCase(String name);
}
