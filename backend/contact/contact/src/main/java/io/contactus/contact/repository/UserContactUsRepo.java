package io.contactus.contact.repository;

import io.contactus.contact.model.UserContactUs;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserContactUsRepo extends MongoRepository<UserContactUs, String> {
    public UserContactUs findByEmailAndName(String eamil, String name);
}
