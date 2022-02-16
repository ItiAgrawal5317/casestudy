package io.myntra.myntraproject.Controller;

import io.myntra.myntraproject.model.ProductItem;
import io.myntra.myntraproject.repository.ProductRepo;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.repository.ExistsQuery;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceAlreadyExistsException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductRepo productRepo;

    //This method will register a new in database if already not existed.
    @PostMapping(value="/create",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> createProduct(@RequestBody ProductItem productItem)
    {
        try {
            ProductItem product= productRepo.findById(productItem.getId()).orElse(null);
            if(product!=null){
                throw new InstanceAlreadyExistsException("Already Exist");
            }
            productRepo.save(productItem);
        }catch (InstanceAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body("Product "+ productItem.getId() +" already exists in system");
        }
        return ResponseEntity.ok(productItem);
    }

    //@GetMapping(value="/userdetail/{email}",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
   /* @GetMapping(value="/validateUser",produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> validateUser (@RequestParam(value = "email", required = true)String email, @RequestParam(value = "password", required = true)String password) throws UnsupportedEncodingException {
       ProductItem productItem = productRepo.findByEmailAndPassword( URLDecoder.decode(email, "UTF-8"), URLDecoder.decode(password, "UTF-8"));
        if (null==productItem){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User: "+ email +" with password: "+ password +" is Invalid.");
        }
        return ResponseEntity.ok(productItem);
    }*/

    @GetMapping("/getProduct")
    public List<ProductItem> getProduct() {
        List<ProductItem> list = new ArrayList<>();
        productRepo.findAll().forEach(list::add);
        return list;
    }

    @GetMapping(value="/getProduct/{id}",produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> getProduct (@PathVariable("id") String id){
        ProductItem productItem = productRepo.findById(id).orElse(null);
        if (null==productItem){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product "+ id +" not found.");
        }
        return ResponseEntity.ok(productItem);
    }

    @DeleteMapping(value="/deleteProduct/{id}")
    ResponseEntity<?> deleteProduct (@PathVariable("id") String id){
        productRepo.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Product "+ id +" Deleted Successfully.");
    }

    @PatchMapping(value="/updateProduct/{id}",consumes = {"application/json;charset=utf-8"},produces = {"application/json;charset=utf-8"})
    ResponseEntity<?> updateProduct (@PathVariable("id") String id, @RequestBody ProductItem productItem){
        productRepo.save(productItem);
        return ResponseEntity.ok(productItem);
    }
}
