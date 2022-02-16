package io.myntra.myntraproject.model;


import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

//Collection using Document Annotation
@Document("product")

@Getter
@Setter
public class ProductItem {
    @Id @NonNull @MongoId
    private String id;
    private String url;
    private String brand;
    private String title;
    private String discount;
    private Price price;

    public ProductItem(@NonNull String id, String url, String brand, String title, String discount, Price price) {
        this.id = id;
        this.url = url;
        this.brand = brand;
        this.title = title;
        this.discount = discount;
        this.price = price;
    }

    public ProductItem() {

    }
}
