Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.Panel', {
	    width: 400,
	    height: 230,
	    title: "table布局的面板",
	    layout: {
	    	type:'table',
	    	columns:4//四列
	    },//设置布局
	    defaults:{
		    width: 100,
		    height: 100,
		    frame:true
	    },
	    renderTo:Ext.getBody(),
		items: [{
		    title: "1",
		    width:300,//这个布局特有的写法
		    colspan: 3//跨三列
		},{
		    title: '2',
		    height:200,
		    rowspan:2//跨两行
		},{
		    title: '3'
		},{
		    title: '4'
		},{
		    title: '5'
		}]
	});
});