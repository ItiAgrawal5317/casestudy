package io.myntra.myntraproject.repository;

import io.myntra.myntraproject.model.ProductItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepo extends MongoRepository<ProductItem, String> {
    //public ProductItem findByEmailAndPassword(String email, String password);
}
