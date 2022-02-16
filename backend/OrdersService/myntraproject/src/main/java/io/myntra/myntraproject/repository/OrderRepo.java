package io.myntra.myntraproject.repository;

import io.myntra.myntraproject.model.OrderItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepo extends MongoRepository<OrderItem, String> {
    //public OrderItem findByEmailAndPassword(String email, String password);
}
