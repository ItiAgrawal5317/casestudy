package io.myntra.myntraproject.model;


import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

//Collection using Document Annotation
@Document("user")

// Getter and Setter annotation for get and set the value using lombok
@Getter
@Setter

//create a class UserRegistration
public class UserRegistration {

    //Id annotation is used to make primary key for entity
    //NonNull for required value
    @Id @NonNull @MongoId
    private String email;
    @NonNull
    private String firstName;
    @NonNull
    private String lastName;
    @NonNull
    private long phone;
    @NonNull
    private String password;

    //Constructor of UserRegistration
    public UserRegistration( String firstName, String lastName, String email, long phone, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    public UserRegistration() {

    }
}
