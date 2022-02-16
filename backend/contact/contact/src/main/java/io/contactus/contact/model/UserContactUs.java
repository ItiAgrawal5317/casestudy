package io.contactus.contact.model;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document("contactUs")

@Getter
@Setter
public class UserContactUs {
    @Id
    @NonNull
    @MongoId
    private String email;
    @NonNull
    private String name;
    @NonNull
    private String subject;
    @NonNull
    private String message;

    public UserContactUs(@NonNull String email, @NonNull String name, @NonNull String subject, @NonNull String message) {
        this.email = email;
        this.name = name;
        this.subject = subject;
        this.message = message;
    }

    public UserContactUs() {

    }
}
