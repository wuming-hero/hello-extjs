Ext.onReady(function(){
	//-------------------------------------
	Ext.define("person",{
		extend:'Ext.data.Model',
		fields:[
			{name:'userName',type:'auto'},
			{name:'password',type:'auto'}
		]
	});
	var p = Ext.create("person",{userName:'yunfengcheng2008@126.com',password:"123456"});
	//-------------------------------------
	//定义一个正则:必须含有1或2或3
	var passTest = /[123]/i
	//当 VTypes提供的验证方式不够用的时候,可以按如下定义验证方式,
	Ext.apply(Ext.form.field.VTypes,{
		myPass :function(val,field){
			return passTest.test(val);
		},
		myPassText:"密码格式错误",
		//只能输入1或2或3,别的不能输入进去!
		myPassMask:/[123]/i
	});
	//-------------------------------------
	var textForm = Ext.create("Ext.form.Panel",{
		title : "form中文本框实例",
		bodyStyle :'padding:5 5 5 5',
		frame : true,
		height : 120,
		width : 300,
		id:'my_form', 
		renderTo:Ext.getBody(),
		defaultType:'textfield',
		defaults:{
			labelSeparator :": ",
			labelWidth : 50,
			width : 200,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left'
		},
		items:[{
			fieldLabel : "Name",
			name:'userName',
			id:'userName',
			selectOnFocus : true,//得到焦点就可选中全部文本
			regex:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
			regexText:"请用邮箱来注册",
			grow:false//是否在这个表单字段规定长度内自动根据文字的内容进行伸缩
		},{
			fieldLabel : "Pass",
			name:'password',
			id:'password',
			inputType:'password',
			vtype:'myPass'
		}],
		buttons: [
		  {text:'登陆系统',handler:function(b){
		  	//我没想通过base来得到数值,那我们就要先得到base 
		  	//那么base我们有什么办法来的到呢?
		  	//很简单 通过 Ext.form.Basic(findField( String id ) : void)
		  	//那么Ext.form.Basic如何得到呢?
		  	//很简单Ext.form.Panel (getForm( ))
		  	//Ext.form.Panel如何得到呢?
		  	//很简单 1>通过ID来的
		  	var formObj = Ext.getCmp("my_form");
		  	var basic = formObj.getForm();
		  	var nameField = basic.findField("userName");
		  	var nameValue = nameField.getValue();
		  	alert(nameValue);
		  }},{
		  	text:'重置',handler:function(b){
			  	var formObj = Ext.getCmp("my_form");
			  	var basic = formObj.getForm();
			  	basic.reset();
		  	}
		  },{
		  	text:'装在数据',handler:function(b){
			  	var formObj = Ext.getCmp("my_form");
			  	var basic = formObj.getForm();
			  	basic.loadRecord(p);
		  	}		  	
		  }
		]		
	})
});






