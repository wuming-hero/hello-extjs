<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%@page import="java.sql.*"%>
<%	
  //要遍历树根和叶子节点,所以要定义两个ResultSet,但每个Statement只能对应一个ResultSet,所以要分别声明两个Statement
	try {//加载驱动
		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	} catch (Exception e) {
	}
	String str = "";
	Connection con;
	Statement sql;
	Statement sql2;  //声明2个Statement,每个Statement只能对应一个ResultSet
	ResultSet rs;
	ResultSet rs2;//声明第2个ResultSet
	try{
		String uri = "jdbc:sqlserver://127.0.0.1:1433;DatabaseName=myDataBase";
		con = DriverManager.getConnection(uri, "sa", "123456");
		sql = con.createStatement();
		//遍历查询根节点
		rs=sql.executeQuery("select * from homework where pid=0");		
		String root="";
		sql2 = con.createStatement();
		while(rs.next())
		{	//遍历查询叶子节点
			int id=rs.getInt(1);			
			rs2 = sql2.executeQuery("select * from homework where pid='" + id+ "'");
			String el="";	
	    	while (rs2.next()){ 
				el+="{id:"+rs2.getInt(1)+",text:'"+rs2.getString(2)+"',leaf:"+rs2.getString(3)+"},";
			}
	    	//得到每父节点所对应的全部叶子节点
		    el=el.substring(0,el.length()-1);
			root+="{id:"+rs.getInt(1)+",text:'"+rs.getString(2)+"',children:["+el+"]},";
		} 
		//得到全部的json数组对象
		root="["+root.substring(0,root.length()-1)+"]";		
		out.print(root);
	}catch (SQLException e) {
		str = e.toString();
		out.print(str);
	}
	
	
%>