package io.myntra.myntraproject.Controller;

import io.myntra.myntraproject.model.OrderItem;
import io.myntra.myntraproject.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.repository.ExistsQuery;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceAlreadyExistsException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

@RestController
public class OrderController {
    @Autowired
    OrderRepo orderRepo;

    @PostMapping(value="/createOrder",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> createOrder(@RequestBody OrderItem orderItem)
    {
        try {
            OrderItem order= orderRepo.findById(orderItem.getOrderId()).orElse(null);
            if(order!=null){
                throw new InstanceAlreadyExistsException("Already Exist");
            }
            orderRepo.save(orderItem);
        }catch (InstanceAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body("Order "+ orderItem.getOrderId() +" already exists in system");
        }
        return ResponseEntity.ok(orderItem);
    }


    @GetMapping(value="/getOrder/{id}",produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> getOrder (@PathVariable("id") String id){
        OrderItem orderItem = orderRepo.findById(id).orElse(null);
        if (null== orderItem){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Order "+ id +" not found.");
        }
        return ResponseEntity.ok(orderItem);
    }


    @DeleteMapping(value="/deleteOrder/{id}")
    ResponseEntity<?> deleteOrder (@PathVariable("id") String id){
        orderRepo.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Order "+ id +" Deleted Successfully.");
    }

    @PatchMapping(value="/updateOrder/{id}",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> updateOrder (@PathVariable("id") String id, @RequestBody OrderItem orderItem){
        orderRepo.save(orderItem);
        return ResponseEntity.ok(orderItem);
    }

}
