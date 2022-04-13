package com.agro.com.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Biddings")
public class Biddings {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long bid;
	
	@Column(name="pid")
	private long pid;
	
	@Column(name="bid_price")
	private float bid_price;
	
	@Column(name="buyerId")
	private	String buyerId;
	@Column(name="endBDate")
	private Date endBDate;
	@Column(name="quantity")
	private double quantity;
	
	@Column(name="pname")
	private String pname;

	public long getBid() {
		return bid;
	}

	public void setBid(long bid) {
		this.bid = bid;
	}

	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public float getBid_price() {
		return bid_price;
	}

	public void setBid_price(float bid_price) {
		this.bid_price = bid_price;
	}

	public String getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(String buyerId) {
		this.buyerId = buyerId;
	}

	public Date getEndBDate() {
		return endBDate;
	}

	public void setEndBDate(Date endBDate) {
		this.endBDate = endBDate;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public Biddings(long bid, long pid, float bid_price, String buyerId, Date endBDate, double quantity, String pname) {
		super();
		this.bid = bid;
		this.pid = pid;
		this.bid_price = bid_price;
		this.buyerId = buyerId;
		this.endBDate = endBDate;
		this.quantity = quantity;
		this.pname = pname;
	}

	public Biddings() {
		super();
	}

	@Override
	public String toString() {
		return "Biddings [bid=" + bid + ", pid=" + pid + ", bid_price=" + bid_price + ", buyerId=" + buyerId
				+ ", endBDate=" + endBDate + ", quantity=" + quantity + ", pname=" + pname + "]";
	}

}