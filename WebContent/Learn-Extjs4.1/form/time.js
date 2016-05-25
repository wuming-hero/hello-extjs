Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'timefield',
		renderTo:Ext.getBody(),
		bodyPadding:'5 5 5 5',
		height:100,
		width:270,
		frame:true,
		defaults:{   ///设置一些默认配置属性
			labelSeparator :": ",  //标签与输入框之间用":"隔开
			labelWidth : 70,
			width : 200,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left'
		},
		items:[{
			xtype:'timefield',
			fieldLabel:'上班时间',
			minValue:'9:00',
			maxValue:'18:00',
			minText:'时间要大于{0}',
			maxText:'时间要小于{0}',
			format:'G时',      //格式化显示格式
			increment:60, //时间间隔为60分钟,默认为15分
			invalidText:'时间格式错误', //输入不符合格式时间时提示信息
			pickerMaxHeight :100  //下拉选择框的最大高度,超过100后则以滚动条显示
		}]
	});
});