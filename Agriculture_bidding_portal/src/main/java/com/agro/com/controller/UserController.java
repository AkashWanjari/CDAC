package com.agro.com.controller;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agro.com.model.User;

import com.agro.com.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	private UserService usrService;
	
//	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/GetUsers")
	public List<User> getUsers()
	{
		return usrService.getAllUsers();
	}
	
	
	@DeleteMapping("/delete")
	public int delete(@RequestParam long id) {
		return usrService.deletebyid(id);
	}
	
	//getuserbyid
//	@GetMapping("/GetUser")
//	public List<User> getUser(@RequestBody User usr)
//	{
//		return usrService.getUserById(usr.getId());
//	}
	
	
	
	@PostMapping("/addusr")
	public String addUser(@RequestBody User usr)
	{
		return usrService.addUserData(usr);
		
	}
	
	@PostMapping("/validateUser")
	public List<User> verifyUser(@RequestBody User usr)
	{	
		return usrService.validateUser(usr.getEmail(),usr.getPassword());	
	}
	
	
	
	
	
//	/api/v1/GetUserByEmailId
	@PostMapping("/GetUserByEmailId")
	public List<User> getUserByEmail(@RequestBody User usr)
	{
		return usrService.getUserByEmail(usr.getEmail());
	}
	
//	@GetMapping("/GetFBUsers")
//	public List<User> getFBUsers()
//	{
//		return usrService.getUsers();
//	}
}
