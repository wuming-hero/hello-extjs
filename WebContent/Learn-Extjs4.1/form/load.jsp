<%@ page language="java" contentType="text/html; charset=UTF-8"%><%@page import="java.sql.*"%>
<%
	String userId=request.getParameter("userId");
	try {//加载驱动
		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	} catch (Exception e) {
	}
	String str = "";
	Connection con;
	Statement sql;
	ResultSet rs;
	try {
		String uri = "jdbc:sqlserver://127.0.0.1:1433;DatabaseName=myDataBase";
		con = DriverManager.getConnection(uri, "sa", "123456");
		sql = con.createStatement();
		rs=sql.executeQuery("select * from form where userId= "+userId);
		String n="";
		if(rs.next()){
			n="{success:true,data:{info:'"+rs.getString(2)+"',userName:'"+rs.getString(3)+"',userAge:'"+rs.getInt(4)+"',}}";
		}else{
			n="{success:false,data:{info:'不存在的数据'}}";
		}
	 //返回数据集
		out.print(n);
	} catch (SQLException e) {
		str = e.toString();
		out.print(str);
	}
%>