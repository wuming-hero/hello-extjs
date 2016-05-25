<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%
	System.out.println(request.getParameter("id"));
	response.getWriter().write("{name:'uspcat.com',age:26,email:'yfc@126.com'}");
%>