package com.agro.com.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.agro.com.model.Biddings;
import com.agro.com.service.BiddingService;


@RestController
@CrossOrigin(origins = "*")   
@RequestMapping("/api/Bidding")
public class BiddingController {
	
	@Autowired
	BiddingService bdngservice;
	
	//add bid
	@PostMapping("/addBid")
	public String addBidd(@RequestBody Biddings bdng)
	{
		return bdngservice.addBid(bdng);	
	}
	

	
	@GetMapping("/getBiddshighest")
	public List<Object> getBiddshighest(@RequestParam String usrid )
	{	
		return bdngservice.getBiddshighest(usrid);
	}
	
	
	
	@GetMapping("/getBiddingsOnId")
	public List<Biddings> getBidds(@RequestParam String usrid )
	{	
		return bdngservice.getBidds(usrid);
	}
	
	//it will return highest bid
//	@PostMapping("/getHighestBid")
//	public List<Object> getHighestBid(@RequestBody Biddings bdng)
//	{	
//		return bdngservice.getHighestBid(bdng);
//	}
	
	
//	@PostMapping("/getBidsOnPid")
//	public List<Biddings> getAllBidsOnPrdct(@RequestBody Biddings bdng){
//		return bdngservice.getBids(bdng);
//	}
	
	@GetMapping("/findWinner")
	public  String findWinnerByHighestBid(@RequestParam float price,long pid)
	{
		return bdngservice.findWinnerByHighestBid(price,pid);
	}
}
