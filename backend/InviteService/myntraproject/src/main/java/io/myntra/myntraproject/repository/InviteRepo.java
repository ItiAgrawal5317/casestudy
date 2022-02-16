package io.myntra.myntraproject.repository;

import io.myntra.myntraproject.model.InviteMessage;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InviteRepo extends MongoRepository<InviteMessage, String> {
    //public InviteMessage findByEmailAndPassword(String email, String password);
}
