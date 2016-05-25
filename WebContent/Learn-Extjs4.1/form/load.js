Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'本地load实例',
		renderTo:Ext.getBody(),
		bodyPadding:'5 5 5 5',
		height:300,
		width:400,
		frame:true,
		defaults:{
			labelSeparator :": ",
			labelWidth : 70,
			width : 300,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left'
		},
		items:[{
			fieldLabel:'ID',
			xtype:'textfield',
			name:'userId',
			value:'1'//硬编码写值		
		},{
			fieldLabel:'NAME',
			xtype:'textfield',
			name:'userName',
			value:'uspcat.com'//硬编码写值
		},{
			fieldLabel:'AGE',
			xtype:'numberfield',
			name:'userAge',
			value:'1'//硬编码写值
		},{
			xtype:'textareafield',
			width:300,
			height:150,
			name:'info',
			fieldLabel:'INFO'		
		}],
		buttons:[{
			text:'提交数据',
			handler:function(){
				//得到form
				var basic = this.up("form").getForm();		
				basic.submit({
					clientValidation: true,//要经过客户端验证的
				    url: '/extjs/extjs!getFormValues.action',
				    method:'POST',
				    success:function(){
				    	Ext.Msg.alert('提示',"提交数据");
				    }
				});
			}
		},{
			text:'加载远程数据',
			handler:function(){
				//得到form
				var basic = this.up("form").getForm();
				//得到userId
				var userId = basic.findField("userId").getValue();
				basic.load({
					params:{userId:userId},
					url:'load.jsp',
					method:'POST',
					success:function(form,action){
						Ext.Msg.alert('提示',"加载成功");
					},
					failure:function(form,action){
						Ext.Msg.alert('提示',"失败原因是: "+action.result.errorMessage);
					}
				});
				
			}
		}]
	});
});