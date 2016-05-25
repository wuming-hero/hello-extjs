Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.container.Viewport', {//一般是这样配合使用的
	    //width: 1000,
	    //height: 800,
	    //renderTo: Ext.getBody(),
	    title: "table布局的面板",
	    layout:'border',
		defaults: {
		    collapsible: true,
		    split: true,
		    bodyStyle: 'padding:15px'
		},
		items: [{
		    title: '上面north',
		    region: 'north',
		    height: 100,
		    cmargins: '5 0 0 0'
		},{
		    title: '下面south',
		    region: 'south',
		    height: 150,
		    minSize: 75,
		    maxSize: 250,
		    cmargins: '5 0 0 0'
		},{
		    title: '左面west',
		    region:'west',
		    margins: '5 0 0 0',
		    cmargins: '5 5 0 0',
		    width: 175,
		    minSize: 100,
		    maxSize: 250
		},{
		    title: '中间Content',
		    collapsible: false,
		    region:'center',
		    margins: '5 0 0 0'
		},{
		    title: '右面east',
		    width: 175,
		    region:'east',
		    margins: '5 0 5 5'
		}]
	});
});