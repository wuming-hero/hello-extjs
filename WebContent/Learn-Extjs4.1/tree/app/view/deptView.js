Ext.define("AM.view.deptView",{
	extend:'Ext.tree.Panel',
	alias: 'widget.deptTree',
	title : '部门树形',
	width : 350,
	height: 300,
	padding : '5 3 3 10',
	rootVisible : false,//控制显隐的属性
	config:{
		copyNodes:''//他充当剪切板的作用
	},
	 //多列树
	columns:[
		{
			xtype:'treecolumn',   //内部类
			text:'部门',
			width:150,
			dataIndex:'text'
		},{
			text:'info',
			dataIndex:'id'
		}
	],
	viewConfig:{   //实现可拖拽功能
		plugins :{
			ptype:'treeviewdragdrop'
			  //对于叶子节点,禁止拖拽
			//appendOnly : true
		},
		listeners:{
			drop:function( node,  data,  overModel,  dropPosition,  options){
				//ajax的操作把数据同步到后台数据库
				alert("把: "+data.records[0].get('text')+" 移动到: "+overModel.get('text'));			
			}
			/*beforedrop:function( node,  data,  overModel,  dropPosition,  dropFunction,  options){
				if(overModel.get("leaf")){
					overModel.set('leaf',false)
				}
			}*/
		}
	},
	dockedItems:[{ //左边栏添加一列按钮
		xtype:'toolbar',
		dock:'left',
		//ui:'footer',   //增加底部突出样式
		items:[
			{xtype:'button',text:'add',id:'add'},
			{xtype:'button',text:'copy',id:'copy'},
			{xtype:'button',text:'delete',id:'delete'},
			{xtype:'button',text:'paste',id:'paste'}
		]
	},{  //顶部添加一行按钮,没有dock 属性,默认是顶部
		xtype:'toolbar',
		items:[{
			xtype:'button',
			id:'allopen',
			text:'展开全部'
		},{
			xtype:'',
			id:'allclose',
			text:'收起全部'
		}]
	}],
	store:'deptStore'
	/*root:{  
		text:'root',
		id : '0',
		leaf:false,
		children:[{
			text:'技术部门',
			checked:false,
			id : '01',
			leaf:false,
			children:[{
				checked:false,
				text:'研发部',
				id : '0101',
				leaf:true		
			},{
				checked:false,
				text:'实施部',
				id : '0102',
				leaf:true		
			}]
		},{
			text:'后勤部门',
			id : '02',
			checked:false,
			leaf:false,
			children:[{
				text:'人事部',
				id : '0201',
				checked:false,
				leaf:true		
			},{
				text:'行政部',
				id : '0202',
				checked:false,
				leaf:true		
			}]
		}]
	}*/
});