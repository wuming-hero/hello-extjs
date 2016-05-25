Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.Panel', {
	    width: 200,
	    height: 200,
	    title: "absolute布局的面板",
	    layout: 'absolute',  //绝对布局
	    renderTo:Ext.getBody(),
	    items:[{
		    title: '子面板',
		    x: 50,   
		    y: 50,    //左上角坐标为0,0,定义子面板从x:50,y:50开始
		    width: 100,
		    height: 100,
		    html: '定位在 x:50, y:40'
		}]
	});
});