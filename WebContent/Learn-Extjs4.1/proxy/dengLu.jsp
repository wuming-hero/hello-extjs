<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@page import="java.sql.*"%><%request.setCharacterEncoding("UTF-8");%> 
<head><meta http-equiv="refresh" content="1;url=http://www.baidu.com"></head>  
<%
	String name = request.getParameter("name");
	String password = request.getParameter("password");
	if(name.length()==0||password.length()==0)
	 { response.sendRedirect("dengLuPage.jsp");          //重定向
	 } 
	try {
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
		rs = sql.executeQuery("select * from zhuCe where name='" + name+ "'");
		if (rs.next()) {
			rs = sql.executeQuery("select * from zhuCe where name='"+ name + "'and password='" + password + "'");
			if (rs.next()) {
				str = "登录成功！";
				//response.sendRedirect("regUser.html"); 
				//response.sendRedirect("http://www.baidu.com"); 
				//response.setHeader("Refresh","5;url=http://www.baidu.com");
				session.setAttribute("name", name);
			} else
				str = "用户密码错误！";
		} else
			str = "不存在该用户，请先注册！";
	} catch (SQLException e) {
		str = e.toString();
	}
	out.print(str);
%>


