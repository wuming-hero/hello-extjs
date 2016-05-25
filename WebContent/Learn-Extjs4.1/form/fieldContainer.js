Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'本地FieldContainer实例',
		renderTo:Ext.getBody(),
		bodyPadding:'5 5 5 5',
		height:100,
		width:570,
		defaults:{
			msgTarget : 'side',
			labelAlign:'left'
		},		
		frame:true,
	    items: [{
	    	xtype: 'fieldcontainer',
        	fieldLabel: '人员信息',
        	combineErrors : true,//是否合并展示错误信息
        	combineLabels: true,//合并展示标签的信息,配合其他使用
        	labelConnector :',',
			layout: {
				type:'hbox',//横排布局(这个起了关键性在作用)
				align:'middle'//垂直居中
			},
	    	fieldDefaults:{
	    		hideLabel:true,//以藏label
				allowBlank:false//不允许是空	    	
	    	},
	    	defaultType:'textfield',
	        items: [{
	        	xtype:'label',
	        	forId:'name',
	        	text:'姓名'
	        },{
	        	fieldLabel: 'name',//虽然被隐藏但是很有用(展示错误信息)
	            name: 'name',
	            inputId:'name'
	        },{
	        	xtype:'label',
	        	forId:'photo',
	        	text:'电话'
	        },{xtype: 'displayfield', value: ' ( '},{
	            name: 'photo',
	            fieldLabel: 'photo',
	            inputId:'photo'
	        },{xtype: 'displayfield', value: ' ) '}]
	    }],
	    buttons: [{
	        text: '提交',
	        handler: function() {
	        	//up的源码讲解
	            this.up('form').getForm().submit({
	                params: {
	                    info: 'age是隐藏字段'
	                }
	            });
	        }
	    }]	    
	});
});