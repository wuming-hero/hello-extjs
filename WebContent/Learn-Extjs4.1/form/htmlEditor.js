Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'htmleditor实例',
		renderTo:Ext.getBody(),
		bodyPadding:'5 5 5 5',
		height:400,
		width:600,
		frame:true,
		items:[{
			xtype:'htmleditor',
			name:'HTML',
			height:320,
			width:580,
			fontFamilies :['宋体','黑体','楷体'], //可以自定义字体
			defaultLinkValue :'http://www.uspcat.com'   //自定义点击添加超链的时候默认的网址
		}],
		buttons:[{
			text:'提交',
			handler:function(){
				this.up("form").getForm().submit({
					params:{
						info:'age是隐藏字段'
					}
				});
			}
		}]
	});	
});