Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.panel.Panel', {
	    title: 'Accordion布局',
	    width: 300,
	    height: 300,
	    layout:'accordion',
	    renderTo:Ext.getBody(),
	    defaults: {
	        bodyStyle: 'padding:15px'
	    },
	    layoutConfig: {
	        titleCollapse: false,
	        animate: true,
	        activeOnTop: true
	    },
	    items: [{
	        title: 'Panel 1',
	        html: '面板1'
	    },{
	        title: 'Panel 2',
	        html: '面板2'
	    },{
	        title: 'Panel 3',
	        html: '面板3'
	    }]
	});
});