package io.myntra.myntraproject;

import io.myntra.myntraproject.model.OrderItem;
import io.myntra.myntraproject.repository.OrderRepo;
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
	OrderRepo orderRepo;

	@Test
	@Order(1)
	public void testCreate() {
		OrderItem orderItem = new OrderItem();
		orderItem.setOrderId("102");
		orderItem.setName("Bhumi");
		orderItem.setAddress("sec-85, Faridabad");
		orderItem.setCity("Faridabad");
		orderItem.setZipCode("12345");
		orderItem.setPhone(9876543256L);
		orderRepo.save(orderItem);
		assertNotNull(orderRepo.findById("102").get());
	}

	@Test
	@Order(2)
	public void testread(){
		OrderItem orderItem = orderRepo.findById("102").get();
		assertEquals("Bhumi",orderItem.getName());
	}

	@Test
	@Order(3)
	public void testUpdate() {
		OrderItem orderItem = orderRepo.findById("102").get();
		orderItem.setZipCode("23678");
		orderRepo.save(orderItem);
		assertNotEquals("12345",orderRepo.findById("102").get().getZipCode());
	}

	@Test
	@Order(4)
	public void testDelete() {
		orderRepo.deleteById("102");
		assertThat(orderRepo.existsById("102")).isFalse();
	}
}
