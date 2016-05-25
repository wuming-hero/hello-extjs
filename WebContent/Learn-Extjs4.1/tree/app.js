Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.Loader.setConfig({
		enabled:true
	});
	Ext.application({
		name : 'AM',
		appFolder : "app",
		launch:function(){
	        Ext.create('Ext.container.Viewport', {
	        	layout:'auto',
	            items: {
	            	xtype: 'deptTree'
	            }
	        });
		},
		controllers:[
			'deptController'
		]
	});
})
