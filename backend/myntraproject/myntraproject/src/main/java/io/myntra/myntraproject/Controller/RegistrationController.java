package io.myntra.myntraproject.Controller;

import io.myntra.myntraproject.model.UserRegistration;
import io.myntra.myntraproject.repository.UserRegistrationRepo;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.repository.ExistsQuery;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceAlreadyExistsException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

//RestController annotation is used to create a RESTAPI
@RestController
public class RegistrationController {

    //Use for set the property
    @Autowired
    UserRegistrationRepo userRegistrationRepo;

    //This method will register a new user in database if already not existed.
    @PostMapping(value="/registration",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> submitRegistration(@RequestBody UserRegistration userRegistration)
    {
        try {
            UserRegistration user= userRegistrationRepo.findById(userRegistration.getEmail()).orElse(null);
            if(user!=null){
                throw new InstanceAlreadyExistsException("Already Exist");
            }
            userRegistrationRepo.save(userRegistration);
        }catch (InstanceAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body("User "+ userRegistration.getEmail() +" already exists in system");
        }
        return ResponseEntity.ok(userRegistration);
    }

    //This method will login a use via checking exact email and password
    @GetMapping(value="/validateUser",produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> validateUser (@RequestParam(value = "email", required = true)String email, @RequestParam(value = "password", required = true)String password) throws UnsupportedEncodingException {
        UserRegistration userRegistration = userRegistrationRepo.findByEmailAndPassword( URLDecoder.decode(email, "UTF-8"), URLDecoder.decode(password, "UTF-8"));
        if (null==userRegistration){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User: "+ email +" with password: "+ password +" is Invalid.");
        }
        return ResponseEntity.ok(userRegistration);
    }

    //This method will read the data of user using exact id
    @GetMapping(value="/getUser/{id}",produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> getUser (@PathVariable("id") String id){
        UserRegistration userRegistration = userRegistrationRepo.findById(id).orElse(null);
        if (null==userRegistration){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User "+ id +" not found.");
        }
        return ResponseEntity.ok(userRegistration);
    }

    //This method will delete the data of user
    @DeleteMapping(value="/deleteUser/{id}")
    ResponseEntity<?> deleteUser (@PathVariable("id") String id){
        userRegistrationRepo.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("User "+ id +" Deleted Successfully.");
    }

    //This method will update the data of user
    @PatchMapping(value="/updateUser/{id}",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> updateUser (@PathVariable("id") String id, @RequestBody UserRegistration userRegistration){
        userRegistrationRepo.save(userRegistration);
        return ResponseEntity.ok(userRegistration);
    }

}
