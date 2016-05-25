Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.Panel', {
	    width: 1000,
	    height: 200,
	    title: "column布局的面板",
	    layout: 'column',//设置布局
	    renderTo:Ext.getBody(),
		items: [{
		    title: '宽 = (总宽度-250)*25%',//先减去固定宽再乘以相应的百分比
		    columnWidth: .25,//这个布局特有的写法,
		    html: 'Content'
		},{
		    title: '宽 = (总宽度-250)*75%',
		    columnWidth: .75,
		    html: 'Content'
		},{
		    title: '宽 = 250px',
		    width: 250,
		    html: 'Content'
		}]
	});
});