package io.contactus.contact.controller;

import io.contactus.contact.model.UserContactUs;
import io.contactus.contact.repository.UserContactUsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

@RestController
public class ContactUsController {

    @Autowired
    UserContactUsRepo userContactUsRepo;

    @PostMapping(value="/aboutus",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> submitForm(@RequestBody UserContactUs userContactUs)
    {
       UserContactUs contactUs = userContactUsRepo.save(userContactUs);
       return ResponseEntity.ok(userContactUs);
    }

    @GetMapping(value="/validateQuery",produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> validateQuery (@RequestParam(value = "email", required = true)String email, @RequestParam(value = "name", required = true)String name) throws UnsupportedEncodingException {
        UserContactUs userContactUs = userContactUsRepo.findByEmailAndName( URLDecoder.decode(email, "UTF-8"), URLDecoder.decode(name, "UTF-8"));
        if (null==userContactUs){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User: "+ email +" with name: "+ name +" is Invalid.");
        }
        return ResponseEntity.ok(userContactUs);
    }

    @GetMapping(value="/getUserQuery/{id}",produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> getUserQuery (@PathVariable("id") String id){
        UserContactUs userContactUs = userContactUsRepo.findById(id).orElse(null);
        if (null==userContactUs){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User "+ id +" not found.");
        }
        return ResponseEntity.ok(userContactUs);
    }

    @DeleteMapping(value="/deleteUserQuery/{id}")
    ResponseEntity<?> deleteUserQuery (@PathVariable("id") String id){
        userContactUsRepo.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("User "+ id +" Deleted Successfully.");
    }

    @PatchMapping(value="/updateUserContact/{id}",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> updateUserContact (@PathVariable("id") String id, @RequestBody UserContactUs userContactUs){
        userContactUsRepo.save(userContactUs);
        return ResponseEntity.ok(userContactUs);
    }
}
