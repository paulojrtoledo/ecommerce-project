package com.dssystem.ecommerce.config;

import com.dssystem.ecommerce.entity.Category;
import com.dssystem.ecommerce.entity.Product;
import com.dssystem.ecommerce.repository.ProductRepository;
import com.dssystem.ecommerce.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

@Configuration
@RequiredArgsConstructor
public class ProductDataInitializer {

    private final ProductRepository productRepository;
    private final CategoryService categoryService;

    @Bean
    CommandLineRunner seedProducts() {
        return args -> {
            createIfMissing("Headset Wild Nature Pro", "Headset gamer com som surround 7.1 e cancelamento de ruído", "Áudio", new BigDecimal("1250.00"), 10, "/headset.webp");
            createIfMissing("Teclado Silent Tech", "Teclado mecânico com switches silenciosos e iluminação RGB", "Periféricos", new BigDecimal("900.00"), 10, "/teclado.webp");
            createIfMissing("Mouse Precision v1", "Mouse óptico com sensor de alta precisão e design ergonômico", "Periféricos", new BigDecimal("200.00"), 10, "/mouse.webp");
            createIfMissing("Interface de Áudio Tech Pro", "Interface de áudio profissional para gravação e produção musical", "Áudio", new BigDecimal("435.00"), 10, "/interface.webp");
            createIfMissing("Drum Pad Function Tech", "Drum pad MIDI com pads sensíveis à pressão para produção musical", "Áudio", new BigDecimal("900.00"), 10, "/drum-pad.webp");
            createIfMissing("Docking Station NTA", "Docking station com múltiplas portas para laptops e dispositivos", "Acessórios", new BigDecimal("280.00"), 10, "/docking-station.webp");

            createIfMissing("Hub Doméstico NTA", "Hub central para automação residencial e controle de dispositivos smart", "Casa Inteligente", new BigDecimal("4150.00"), 10, "/hub.jpeg");
            createIfMissing("Smart Watch GetFree", "Relógio inteligente com monitoramento de saúde e notificações", "Wearables", new BigDecimal("890.00"), 10, "/smart-watch.jpeg");
            createIfMissing("Câmera Precision Nature", "Câmera de segurança com visão noturna e detecção de movimento", "Segurança", new BigDecimal("670.00"), 10, "/camera.jpeg");
            createIfMissing("Fone de Ouvido NT True", "Fones wireless com cancelamento de ruído e som de alta qualidade", "Áudio", new BigDecimal("260.00"), 10, "/fone-de-ouvido.jpeg");
            createIfMissing("Home Alarm v1", "Sistema de alarme residencial com sensores e controle remoto", "Segurança", new BigDecimal("790.00"), 10, "/home-alarm.jpeg");
            createIfMissing("Sensor Smart NTA", "Sensor multipropósito para monitoramento ambiental e de presença", "Casa Inteligente", new BigDecimal("1100.00"), 10, "/smart-sensor.jpeg");
        };
    }

    private void createIfMissing(String name,
                                 String description,
                                 String categoryName,
                                 BigDecimal price,
                                 Integer stock,
                                 String imageUrl) {
        if (productRepository.findByNameIgnoreCase(name).isPresent()) {
            return;
        }

        Category category = categoryService.findOrCreateByName(categoryName);

        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setCategory(category);
        product.setPrice(price);
        product.setStockQuantity(stock);
        product.setImageUrl(imageUrl);

        productRepository.save(product);
    }
}
