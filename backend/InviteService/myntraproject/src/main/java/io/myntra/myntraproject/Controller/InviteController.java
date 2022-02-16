package io.myntra.myntraproject.Controller;

import io.myntra.myntraproject.model.InviteMessage;
import io.myntra.myntraproject.repository.InviteRepo;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.repository.ExistsQuery;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceAlreadyExistsException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

@RestController
public class InviteController {
    @Autowired
    InviteRepo inviteRepo;

    //This method will register a new in database if already not existed.
    @PostMapping(value="/inviteperson",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> inviteperson(@RequestBody InviteMessage inviteMessage)
    {
        try {
            InviteMessage invite= inviteRepo.findById(inviteMessage.getUseremail()).orElse(null);
            if(invite!=null){
                throw new InstanceAlreadyExistsException("Already Exist");
            }
            inviteRepo.save(inviteMessage);
        }catch (InstanceAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body("User "+ inviteMessage.getUseremail() +" already exists in system");
        }
        return ResponseEntity.ok(inviteMessage);
    }

    //@GetMapping(value="/userdetail/{email}",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    /*@GetMapping(value="/validateUser",produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> validateUser (@RequestParam(value = "email", required = true)String email, @RequestParam(value = "password", required = true)String password) throws UnsupportedEncodingException {
        InviteMessage inviteMessage = inviteRepo.findByEmailAndPassword( URLDecoder.decode(email, "UTF-8"), URLDecoder.decode(password, "UTF-8"));
        if (null== inviteMessage){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User: "+ email +" with password: "+ password +" is Invalid.");
        }
        return ResponseEntity.ok(inviteMessage);
    }*/

    @GetMapping(value="/getInvitedUser/{id}",produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> getInvitedUser (@PathVariable("id") String id){
        InviteMessage inviteMessage = inviteRepo.findById(id).orElse(null);
        if (null== inviteMessage){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User "+ id +" not found.");
        }
        return ResponseEntity.ok(inviteMessage);
    }

    @DeleteMapping(value="/deleteInvite/{id}")
    ResponseEntity<?> deleteInvite (@PathVariable("id") String id){
        inviteRepo.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("User "+ id +" Invitation Deleted Successfully.");
    }

    @PatchMapping(value="/updateInvite/{id}",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> updateInvite (@PathVariable("id") String id, @RequestBody InviteMessage inviteMessage){
        inviteRepo.save(inviteMessage);
        return ResponseEntity.ok(inviteMessage);
    }

}
