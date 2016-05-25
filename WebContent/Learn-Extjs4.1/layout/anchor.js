Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.Panel', {
	    width: 500,
	    height: 500,
	    title: "Anchor布局的面板",
	    layout: 'anchor', //锚点布局
	    renderTo:Ext.getBody(),
	    items: [{
	        xtype: 'panel',
	        title: '75% 宽 and 20% 高',
	        anchor: '75% 20%'   //子面板大小为父面板宽的75% 高的20%
	    },{
	        xtype: 'panel',
	        title: '偏移量 -300 宽 & -200 高',
	        anchor: '-300 -200'    //子面板大小为父面板 宽减去300,高减去200
	    },{
	        xtype: 'panel',
	        title: '综合使用 -250 宽   20% 高',
	        anchor: '-250 20%'     //子面板大小为父面板的宽减去250,高为父面板高的20%
	    }]
	});
});