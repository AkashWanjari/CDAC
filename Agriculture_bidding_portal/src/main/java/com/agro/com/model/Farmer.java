package com.agro.com.model;

import java.sql.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity(name="farmer")
@Table(name="farmer")

public class Farmer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long pid=100;
	
	@Column(name="pname")
	private String pname;
	
	//pimage
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String img;
	
	//pprice
	@Column(name="minPrice")
	private Double minPrice;
	
	//pbdate
	@Column(name="endBDate")
	private Date endBDate;
	
	//pquantity
	@Column(name="quantity")
	private Double quantity;
	
//	@Column(name="status")
//	private boolean status=false;
	
	@Column(name="highestBid")
	private Double highestBid=0.0;
	@Column(name="discription")
	private String discription;
	
	@Column(name="winnerId")
	private String winnerId;
	@Column(name="fname")
	private String fname;
	
	
	
	
	public Farmer() {
		super();
	}




	public long getPid() {
		return pid;
	}




	public void setPid(long pid) {
		this.pid = pid;
	}




	public String getPname() {
		return pname;
	}




	public void setPname(String pname) {
		this.pname = pname;
	}




	public String getImg() {
		return img;
	}




	public void setImg(String img) {
		this.img = img;
	}




	public Double getMinPrice() {
		return minPrice;
	}




	public void setMinPrice(Double minPrice) {
		this.minPrice = minPrice;
	}




	public Date getEndBDate() {
		return endBDate;
	}




	public void setEndBDate(Date endBDate) {
		this.endBDate = endBDate;
	}




	public Double getQuantity() {
		return quantity;
	}




	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}



//
//	public boolean isStatus() {
//		return status;
//	}




//	public void setStatus(boolean status) {
//		this.status = status;
//	}




	public Double getHighestBid() {
		return highestBid;
	}




	public void setHighestBid(Double highestBid) {
		this.highestBid = highestBid;
	}




	public String getDiscription() {
		return discription;
	}




	public void setDiscription(String discription) {
		this.discription = discription;
	}




	public String getWinnerId() {
		return winnerId;
	}




	public void setWinnerId(String winnerId) {
		this.winnerId = winnerId;
	}




	public String getfname() {
		return fname;
	}




	public void setfname(String fname) {
		this.fname = fname;
	}




	public Farmer(long pid, String pname, String img, Double minPrice, Date endBDate, Double quantity, boolean status,
			Double highestBid, String discription, String winnerId, String fname) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.img = img;
		this.minPrice = minPrice;
		this.endBDate = endBDate;
		this.quantity = quantity;
//		this.status = status;
		this.highestBid = highestBid;
		this.discription = discription;
		this.winnerId = winnerId;
		this.fname = fname;
	}
	
	

	





	




	



	

	
	
		
}
