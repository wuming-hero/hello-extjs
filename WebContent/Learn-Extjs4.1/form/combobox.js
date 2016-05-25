Ext.onReady(function(){
	Ext.QuickTips.init();
	//部门类
	Ext.define("department",{
		extend:'Ext.data.Model',
		fields:[
			{name:'name'},
			{name:'id'}
		]
	});
	var st = Ext.create("Ext.data.Store",{
		model:'department',
		data:[
			{name:'销售部',id:'001'},
			{name:'人事部',id:'002'},
			{name:'研发部',id:'003'},
			{name:'产品部',id:'004'},
			{name:'实施部',id:'005'},
			{name:'法务部',id:'006'}
		]
	});
	Ext.create("Ext.form.Panel",{
		title:'本地combobox实例',
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
			xtype:'combobox',
			listConfig:{//控制下拉列表的样式
				emptyText:'没有找到匹配的数值',
				maxHeight:200
			},
			fieldLabel:'选择部门',
			name:'部门',
			overCls:'a',  //引用form.html中自定义的样式
			queryMode:'local',//[local|remot]
			store:st,
			valueField:"id",   //传入后台字段
			displayField :'name', //显示字段
			forceSelection:true,//不允许使用数据集合中没有的数值
			typeAhead : true,
			value:'002'
		}]
	});
});