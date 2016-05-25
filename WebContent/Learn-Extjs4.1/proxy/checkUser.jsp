<%@ page language="java" contentType="text/json; charset=UTF-8"
	pageEncoding="UTF-8"%><%@page import="java.sql.*"%><%request.setCharacterEncoding("UTF-8");%>  
 <%!int code;%>
<%
	String name = request.getParameter("name");
	String msg = "<font color=#009900>√</font>";
	code = 0;
	/* if ("admin".equals(name)) {
		//实际中要调用后台的数据去查询
		msg = "对不起,用户已经存在!";
		code = 1;
	}*/
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
		rs = sql.executeQuery("select * from zhuCe2 where name='" + name+ "'");
		if (rs.next()) {
			msg = "<font color=#ff0000>×对不起，用户名已存在！</font>";
			code = 1;
		}
	} catch (SQLException e) {
		str = e.toString();
	}
	out.print(str);
%>
{"code":<%=this.code%>,"msg":"<%=msg%>"}
