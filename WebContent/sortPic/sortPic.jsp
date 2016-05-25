<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>图片排序</title>
<script type="text/javascript" src="script/jquery-1.4.1.js"></script>
<script type=”text/javascript”>var jQuery=$;</script>
<script type="text/javascript" src="script/JustWalking.js"></script>
<script type="text/javascript" src="script/sortPic.js"></script>

<style type="text/css">
	.main {width:900px;float:left;overflow:hidden;}
	.main .pic {margin:5px;float:left;}
	.bloc {width:240px;height:240px;float:left;border:1px solid #cccccc;cursor:move;overflow:hidden;}
	.bloc .img {width:240px; height:240px;}
</style>
<script type="text/javascript">
	window.onload=function(){
		qbClass.ManageBlock.DragsDiv();
	}
	function saveSortNum(id){
		var imgs=$(id).getElementsByTagName("img");
		
		var sortIds="";
		for(i=0;i<imgs.length;i++){
			if(sortIds==""){
				sortIds=imgs[i].getAttribute("Id");
			}
			else{
				sortIds+=","+imgs[i].getAttribute("Id");
			}
		}
		alert(sortIds);
		
		jQuery.ajax({
			type:'post',
			url:'../PicServlet',//+"?sid="+sortIds,
			data:'sortIds='+sortIds,
		});
		
	}
</script>
</head>
<body>
<div id="ShowBlockTD">
	<div id="LeftBlock" class="main">
          <div ty="column">
          <c:forEach items="${applicationScope.pics }" var="pic">
          		 <div class="pic" ty="module" sy="LeftBlock">
                  <div ty="bloc" class="bloc">
                      <div><img src="${pic.picPath}"  Id="${pic.picId }"/></div>
                  </div>
              </div>
          </c:forEach>
          </div>
     </div>
</div>
<div><input id="sortIds" type="submit" value="确定" onclick="saveSortNum('ShowBlockTD')"/></div>
</body>
</html>