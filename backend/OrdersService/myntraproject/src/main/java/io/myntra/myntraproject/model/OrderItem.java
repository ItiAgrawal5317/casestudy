package io.myntra.myntraproject.model;


import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

//Collection using Document Annotation
@Document("order")

@Getter
@Setter
public class OrderItem {
    @Id @NonNull @MongoId
    private String orderId;
    private String name;
    private String address;
    private String city;
    private String zipCode;
    private long phone;


    //Constructor

    public OrderItem(@NonNull String orderId, String name, String address, String city, String zipCode, long phone) {
        this.orderId = orderId;
        this.name = name;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
        this.phone = phone;
    }

    public OrderItem() {

    }
}
