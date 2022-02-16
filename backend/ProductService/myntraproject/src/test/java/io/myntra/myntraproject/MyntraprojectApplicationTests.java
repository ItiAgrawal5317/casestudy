package io.myntra.myntraproject;

import io.myntra.myntraproject.model.Price;
import io.myntra.myntraproject.model.ProductItem;
import io.myntra.myntraproject.repository.ProductRepo;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class MyntraprojectApplicationTests {

	/*@Test
	void contextLoads() {
	}*/

    @Autowired
    ProductRepo productRepo;

    @Test
    @Order(1)
    public void testCreate() {
        ProductItem productItem = new ProductItem();
        Price price=new Price("5000", "2500");
        productItem.setId("product31");
        productItem.setUrl("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15144124/2021/8/13/ac1f798f-d984-4879-83a7-a0511298cd471628867439081StyleeLifestyleCreamGeorgetteEmbroideredDressMaterial1.jpg");
        productItem.setBrand("Prada");
        productItem.setTitle("Ethnic Dress");
        productItem.setDiscount("50% OFF");
        productItem.setPrice(price);
        productRepo.save(productItem);
        assertNotNull(productRepo.findById("product31").get());
    }

    @Test
    @Order(2)
    public void testread(){
        ProductItem productItem = productRepo.findById("product31").get();
        assertEquals("Prada",productItem.getBrand());
    }

    @Test
    @Order(3)
    public void testUpdate() {
        ProductItem productItem = productRepo.findById("product31").get();
        productItem.setBrand("Ethnic Junction");
        productRepo.save(productItem);
        assertNotEquals("Prada",productRepo.findById("product31").get().getBrand());
    }

    @Test
    @Order(4)
    public void testDelete() {
        productRepo.deleteById("product31");
        assertThat(productRepo.existsById("product31")).isFalse();
    }
}
