package com.agro.com.service;

import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.agro.com.model.User;
import com.agro.com.repository.UserRepo;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserRepo usrRepo;
	
	@Autowired
	JavaMailSender javaMailSender;
	
	public List<User> getAllUsers()
	{
	
		return usrRepo.findAll();
	}
	
	
	public List<User> getUserById(long id)
	{
		return usrRepo.getUser(id);
	}
	
	public String addUserData(User usr)
	{
		usrRepo.save(usr);
		return "success.....";
	}
	
	
	public List<User> validateUser( String email,String pass)
	{	
		return usrRepo.verifyUserDetails(email,pass);	
	}
	

	
	
	public List<User> getUserByEmail(String email)
	{
		return  usrRepo.getUserByEmailId(email);
	}
	
	
	
	
	//getFbUsers
	public List<User> getUsers()
	{
		return usrRepo.getUseDetails();
	}


	public int deletebyid(long id) {
		
		return usrRepo.deleteuserbyid(id);
	}


	
}
