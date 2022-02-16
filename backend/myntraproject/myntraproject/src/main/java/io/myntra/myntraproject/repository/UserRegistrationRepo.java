package io.myntra.myntraproject.repository;

import io.myntra.myntraproject.model.UserRegistration;
import org.springframework.data.mongodb.repository.MongoRepository;

//Extends MongoRepository for using CRUD operation in application
public interface UserRegistrationRepo extends MongoRepository<UserRegistration, String> {

    //create a method for get the data using email and password
    public UserRegistration findByEmailAndPassword(String email,String password);
}
