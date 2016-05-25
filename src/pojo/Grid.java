package pojo;

import java.sql.Date;

public class Grid {
	
	private int id;
	private String name;
	private int age;
	private String email;
	private String gender;
	private String isIt;
	private Date birthday;
	private int deposit;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getIsIt() {
		return isIt;
	}
	public void setIsIt(String isIt) {
		this.isIt = isIt;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date date) {
		this.birthday = date;
	}
	public int getDeposit() {
		return deposit;
	}
	public void setDeposit(int deposit) {
		this.deposit = deposit;
	}

}
