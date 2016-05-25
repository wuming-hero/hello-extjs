Ext.onReady(function(){
	Ext.QuickTips.init();
	//部门类
	Ext.define("department",{
		extend:'Ext.data.Model',
		fields:[
			{name:'name'},
			{name:'id'},
			{name:'c'}
		]
	});
	var st = Ext.create("Ext.data.Store",{
		model:'department',
		pageSize:4,
		proxy:{
			type:'ajax',
			url:'/extjs/extjs!getComboBox.action'
		}
	});
	Ext.create("Ext.form.Panel",{
		title:'本地combobox实例',
		renderTo:'formDemo',
		bodyPadding:'5 5 5 5',
		height:100,
		width:470,
		frame:true,
		defaults:{
			labelSeparator :": ",
			labelWidth : 70,
			width : 300,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left',
			pageSize:4
		},
		items:[{
			xtype:'combobox',
			listConfig:{//控制下拉列表的样式
				emptyText:'没有找到匹配的数值',
				maxHeight:200,
				getInnerTpl :function(){
					return "<div class='{c}'>{name}.{id}</div>";
				}
			},
			fieldLabel:'城市',
			name:'post',
			queryMode:'remot',//[local|remot]
			store:st,
			valueField:"id",
			minChars:1,
			triggerAction :'all',
			queryDelay : 400,
			queryParam:'whereSql',
			multiSelect:true,//允许多选
			displayField :'name'//,
			//forceSelection:true,//不运行使用数据集合中没有的数值
			//typeAhead : true,
			//value:'001'
		}]
	});
});