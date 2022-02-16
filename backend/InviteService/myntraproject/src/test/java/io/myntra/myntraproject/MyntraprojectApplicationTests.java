package io.myntra.myntraproject;

import io.myntra.myntraproject.model.InviteMessage;
import io.myntra.myntraproject.repository.InviteRepo;
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
	InviteRepo inviteRepo;

	@Test
	@Order(1)
	public void testCreate() {
		InviteMessage inviteMessage = new InviteMessage();
		inviteMessage.setUseremail("itu@gmail.com");
		inviteMessage.setUsername("Itu");
		inviteMessage.setCode("45678");
		inviteMessage.setPhone(5678987634L);
		inviteMessage.setFriendname("Chary");
		inviteRepo.save(inviteMessage);
		assertNotNull(inviteRepo.findById("itu@gmail.com").get());
	}

	@Test
	@Order(2)
	public void testread(){
		InviteMessage inviteMessage = inviteRepo.findById("itu@gmail.com").get();
		assertEquals("Itu",inviteMessage.getUsername());
	}

	@Test
	@Order(3)
	public void testUpdate() {
		InviteMessage inviteMessage = inviteRepo.findById("itu@gmail.com").get();
		inviteMessage.setUsername("Priyan");
		inviteRepo.save(inviteMessage);
		assertNotEquals("Itu",inviteRepo.findById("itu@gmail.com").get().getUsername());
	}

	@Test
	@Order(4)
	public void testDelete() {
		inviteRepo.deleteById("itu@gmail.com");
		assertThat(inviteRepo.existsById("itu@gmail.com")).isFalse();
	}

}
