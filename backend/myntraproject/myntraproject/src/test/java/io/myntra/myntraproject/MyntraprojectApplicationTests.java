package io.myntra.myntraproject;

import io.myntra.myntraproject.model.UserRegistration;
import io.myntra.myntraproject.repository.UserRegistrationRepo;
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
	UserRegistrationRepo userRegistrationRepo;

	@Test
	@Order(1)
	public void testCreate() {
		UserRegistration userRegistration = new UserRegistration();
		userRegistration.setEmail("iti1012@gmail.com");
		userRegistration.setFirstName("Iti");
		userRegistration.setLastName("Agrawal");
		userRegistration.setPhone(9876543256L);
		userRegistration.setPassword("12345");
		userRegistrationRepo.save(userRegistration);
		assertNotNull(userRegistrationRepo.findById("iti1012@gmail.com").get());
	}

	@Test
	@Order(2)
	public void testread(){
		UserRegistration userRegistration = userRegistrationRepo.findByEmailAndPassword("iti1012@gmail.com","12345");
		assertEquals("Iti",userRegistration.getFirstName());
	}

	@Test
	@Order(3)
	public void testUpdate() {
		UserRegistration userRegistration = userRegistrationRepo.findById("iti1012@gmail.com").get();
		userRegistration.setLastName("Garg");
		userRegistrationRepo.save(userRegistration);
		assertNotEquals("Agrawal",userRegistrationRepo.findById("iti1012@gmail.com").get().getLastName());
	}

	@Test
	@Order(4)
	public void testDelete() {
		userRegistrationRepo.deleteById("iti1012@gmail.com");
		assertThat(userRegistrationRepo.existsById("iti1012@gmail.com")).isFalse();
	}

}
