Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.Panel', {
	    width: 800,
	    height: 280,
	    title: "AutoLayout布局的面板",
	    layout: 'auto',//自动布局,也可以看竖直布局,就一个接一个布局在下面,默认为auto布局
	    renderTo: Ext.getBody(),
	    items: [{
	        xtype: 'panel',
	        title: '第一个面板',
	        width: '75%', //站总体宽度的75%
	        height: 90
	    },{
	        xtype: 'panel',
	        title: '第二个面板',
	        width: '75%',
	        height: 90
	    },{
	        xtype: 'panel',
	        title: '第三个面板',
	        width: '99%',
	        height: 90
	    }]
	});
});