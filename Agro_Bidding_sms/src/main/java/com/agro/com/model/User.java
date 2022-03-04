package com.agro.com.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity(name="users")
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="fname")
	private String fname;
		
	@Column(name="email")
	private String email;
	
	@Column(name="address")
	private String address;
	
	@Column(name="idproof")
	private String idproof;
	
	@Column(name="password")
	private String password;
	
	
	@Column(name="type")
	private String type;
	
	

	private String winnerId;




	public User(long id, String fname, String email, String address, String idproof, String password, String type,
			String winnerId) {
		super();
		this.id = id;
		this.fname = fname;
		this.email = email;
		this.address = address;
		this.idproof = idproof;
		this.password = password;
		this.type = type;
		this.winnerId = winnerId;
	}




	public User() {
		super();
	}




	@Override
	public String toString() {
		return "User [id=" + id + ", fname=" + fname + ", email=" + email + ", address=" + address + ", idproof="
				+ idproof + ", password=" + password + ", type=" + type + ", winner=" + winnerId + "]";
	}




	public long getId() {
		return id;
	}




	public void setId(long id) {
		this.id = id;
	}




	public String getFname() {
		return fname;
	}




	public void setFname(String fname) {
		this.fname = fname;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getAddress() {
		return address;
	}




	public void setAddress(String address) {
		this.address = address;
	}




	public String getIdproof() {
		return idproof;
	}




	public void setIdproof(String idproof) {
		this.idproof = idproof;
	}




	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}




	public String getType() {
		return type;
	}




	public void setType(String type) {
		this.type = type;
	}




	public String getWinnerId() {
		return winnerId;
	}




	public void setWinnerId(String winnerId) {
		this.winnerId = winnerId;
	}




	
	
//	@OneToMany(fetch =FetchType.LAZY )
//	private List<Farmer> farmer;
	
	
	

	
	
}
