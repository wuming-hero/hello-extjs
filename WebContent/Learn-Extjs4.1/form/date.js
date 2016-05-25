Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create("Ext.form.Panel",{
		title:'本地date实例',
		renderTo:Ext.getBody(),
		bodyPadding:'5 5 5 5',
		height:100,
		width:270,
		frame:true,
		defaults:{
			labelSeparator :": ",
			labelWidth : 70,
			width : 200,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left'
		},
		items:[{
			xtype:'datefield',
			fieldLabel:'工作日',
			minValue:'7/1/12',   //好变态的日期格式:要用x月/y日/z年这个格式才行!!
			maxValue:'09/03/2012',
			disabledDays :[0,6],   //限定一周的周几和周几不能被选择
			disabledDates:['08/18/2012'] //限定某个日期不能被选择 2012年8月18号的格式如上
			//disabledDatesText:'这个日期你不能选择'
		}]
	});
});