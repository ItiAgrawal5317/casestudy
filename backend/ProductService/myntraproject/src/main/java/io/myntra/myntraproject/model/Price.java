package io.myntra.myntraproject.model;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document("product")

@Getter
@Setter
public class Price {

    private String mrp;
    private String cost;

    public Price(String mrp, String cost) {
        this.mrp = mrp;
        this.cost = cost;
    }

    public Price() {

    }
}
