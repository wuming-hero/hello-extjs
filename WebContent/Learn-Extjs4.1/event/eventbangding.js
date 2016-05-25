Ext.onReady(function(){
	//判断浏览器类型
	if(Ext.isIE){
		// 对于ie
		document.getElementById("btn2").attachEvent("onclick",function(){
			Ext.MsgBox.alert("第二种事件绑定方式");
		});
	}else{
		// 对于火狐等非ie内核
		document.getElementById("btn2").addEventListener("click",function(){
			Ext.MessageBox.alert("!","第二种事件绑定方式");
		});		
	}
	Ext.get('btn3').on("click",function(){
		alert("第三种事件绑定方式");
	})
});