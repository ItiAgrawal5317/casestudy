package io.myntra.myntraproject.model;


import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

//Collection using Document Annotation
@Document("invite")

@Getter
@Setter
public class InviteMessage {
    @Id @NonNull @MongoId
    private String useremail;
    @NonNull
    private String username;
    @NonNull
    private String code;
    @NonNull
    private long phone;
    @NonNull
    private String friendname;

    //Constructor
    public InviteMessage(String username, String code, String useremail, long phone, String friendname) {
        this.username = username;
        this.code = code;
        this.useremail = useremail;
        this.phone = phone;
        this.friendname = friendname;
    }

    public InviteMessage() {

    }
}
