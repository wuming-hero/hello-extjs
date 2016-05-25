Ext.define("MA.view.gridView",{
	extend:'Ext.grid.Panel',
	title : 'Grid',
	alias: 'widget.mygrid',  //自定义声明别名!!
	frame : true,
	width : 800,
	height: 400,
	/*features:[
		Ext.create("Ext.grid.feature.Grouping",{//待完善....
			groupByText : "性别分组",
			groupHeaderTpl : "性别:{name}  一共{rows.length}人",
			showGroupsText : "展示分组",
			startCollapsed : true
				
			})
	],*/
	columns : [ //列模式
   		Ext.create("Ext.grid.RowNumberer",{}),//添加列number
		{text:"id",dataIndex:'id',width:35,locked:false},//  列锁定
		{text:"Name",dataIndex:'name',width:80,
			field:{
				xtype:'textfield',
				allowBlank:false
			}
		},
		{text:"age",dataIndex:'age',width:50},
		{text:"email",dataIndex:'email',width:100,
			field:{
				xtype:'textfield',
				allowBlank:false
			}
		},{  //加入1普通列即可,所以没使用xtype
			text:'gender',
			dataIndex:'gender',
			width:50,
			//DDName:'sy_gender',
			//自定义格式化函数render
			//render的使用:数据字典{业务数据字典比如风险等级,城市等这些可变的数据字典放到数据库中维护,对于不变数据字典比如男 女,是 否,人的血型等,没必要放到数据库中去维护,直接当前台缓存去做}
			renderer:function(value){
				if(value){//判断value是否有值
					if(value == "女"){
						return "<font color='green'>"+value+"</font>"
					}else if(value == "男"){
						return "<font color='red'>"+value+"</font>"
					}
				}
			}
		},
		{
			text:'isIt',
			dataIndex:'isIt',
			xtype : "booleancolumn",
			width:50,
			trueText:'是',
			falseText:'不是'
		},{  
			text:'birthday',
			dataIndex:'birthday',
			xtype : "datecolumn",
			width:100,
			format:'Y年m月d日'  //格式化日期,传进来的值:1990/02/20格式化成1990年2月20日
		},{
			text:'deposit',
			dataIndex:'deposit',
			xtype:'numbercolumn',
			width:50,
			format:'0,000'
		},
		{   //模版列模式,可以将某些隐藏的属性与显示的信息相结合,形成一段有意义的描述
			text:'描述',
			xtype:'templatecolumn',
			tpl:'姓名是{name} 年龄是{age}',
			width:150
		},
		{
		 xtype:'actioncolumn',
		 text:'Action',
		 id:'delete2',
		 header:'Action',
		 icon:'./app/view/image/delete1.png',
		 width:50
		}
	],
	tbar :[
		{xtype:'button',text:'添加',iconCls:'table_add'},
		{xtype:'button',id:'delete',text:'删除',iconCls:'table_remove'},
		{xtype:'button',text:'修改',iconCls:'table_edit'},
		{xtype:'button',text:'查看',iconCls:'table_comm'},
		{xtype:'button',id:'selection',text:'selection',iconCls:'table_comm'},
		{xtype:'button',text:'保存',id:'save',icon:'./app/view/image/table_save.png'}
	],	
	dockedItems :[{
			xtype:'pagingtoolbar',
			//store:Ext.data.StoreManager.lookup('s_user'),//须要个store...
			store:'gridStore',
			dock:'bottom',
			pageSize:10,  //每页显示的条数
			displayMsg: '显示第 {0} 条到 {1} 条，一共 {2} 条', 
		    emptyMsg: 'msg', 
		    firstText:'第一页',
		    prevText: '前一页',  
		    nextText: '后一页',  
		    lastText: '最后一页',  
		    refreshText: '刷新',
			displayInfo:true
		}],
	plugins:[
				Ext.create("Ext.grid.plugin.CellEditing",{
					clicksToEdit : 2  //双击可修改单元格!但单元格须要定义修改格式:本例用email为例
				})
	],
	//selType:'cellmodel',
	//selType:'rowmodel',
	selType:'checkboxmodel',//设定选择模式
	multiSelect:true,//允许多选
	store : 'gridStore',
	initComponent:function(){//一般有继承,都会有个初始化的函数
		this.callParent(arguments);
	}
});


