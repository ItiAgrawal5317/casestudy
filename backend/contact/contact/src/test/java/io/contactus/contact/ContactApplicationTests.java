package io.contactus.contact;

import io.contactus.contact.model.UserContactUs;
import io.contactus.contact.repository.UserContactUsRepo;
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
class ContactApplicationTests {

	/*@Test
	void contextLoads() {
	}*/

	@Autowired
	UserContactUsRepo userContactUsRepo;

	@Test
	@Order(1)
	public void testCreate() {
		UserContactUs userContactUs = new UserContactUs();
		userContactUs.setEmail("itu@gmail.com");
		userContactUs.setName("Itu");
		userContactUs.setSubject("Order");
		userContactUs.setMessage("When i will received my Order");
		userContactUsRepo.save(userContactUs);
		assertNotNull(userContactUsRepo.findById("itu@gmail.com").get());
	}

	@Test
	@Order(2)
	public void testread(){
		UserContactUs userContactUs = userContactUsRepo.findById("itu@gmail.com").get();
		assertEquals("Itu",userContactUs.getName());
	}

	@Test
	@Order(3)
	public void testUpdate() {
		UserContactUs userContactUs = userContactUsRepo.findById("itu@gmail.com").get();
		userContactUs.setName("Priyan");
		userContactUsRepo.save(userContactUs);
		assertNotEquals("Itu",userContactUsRepo.findById("itu@gmail.com").get().getName());
	}

	@Test
	@Order(4)
	public void testDelete() {
		userContactUsRepo.deleteById("itu@gmail.com");
		assertThat(userContactUsRepo.existsById("itu@gmail.com")).isFalse();
	}
}
