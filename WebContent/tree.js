Ext.onReady(function(){
	//Ext.QuickTips.init();
	Ext.create('Ext.container.Viewport', {//一般是这样配合使用的
	    title: "border布局的面板",
	    layout:'border',
	    collapsible: true,
	    split: false,
		items: [{
		    title: '上面north',
		    region: 'north',
		    height: 100
		},{
		    title: '左面west',
		    region:'west',
		    margins: '5 0 0 0',
		    width: 250,
		    minSize: 100,
		    maxSize: 350,
			items: [
			{
				xtype:'combobox'
			},{
			xtype:'treepanel',
			title : '家庭作业',
			width : 350,
			height: 300,
			border:false,
			margins:'0 5 0 0',
			rootVisible : false,//控制显隐的属性
			 //多列树
			columns:[
				{
					xtype:'treecolumn',   //内部类
					text:'月份',
					width:150,
					dataIndex:'text'
				},{
					text:'完成情况',
					dataIndex:'id'
				}
			],
			dockedItems:[{  //顶部添加一行按钮,没有dock 属性,默认是顶部
			xtype:'toolbar',
			items:[{
				xtype:'button',
				id:'allopen',
				text:'展开全部',
				handler:function(b,e){
					var tree = b.ownerCt.ownerCt;
					tree.expandAll();
				}
			},{
				xtype:'button',
				id:'allclose',
				text:'收起全部',
				handler:function(b,e){
					var tree = b.ownerCt.ownerCt;
					tree.collapseAll();
				}
			}]
		}],
		store:{
			fields:[
				{name: 'text',  type: 'string'},
	    		{name: 'id',   type: 'int'}	
			],
			proxy:{
			type:'ajax',
			url:'tree.jsp',
			reader:'json',
			autoLoad:true
			}}
		}]
		},{
			title: '中间Content',
		    collapsible: false,
		    region:'center',
		    margins: '5 0 0 0'
		}]
	});
});
