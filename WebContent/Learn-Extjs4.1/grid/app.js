Ext.onReady(function(){
	Ext.QuickTips.init();   //Ext初始化
	Ext.Loader.setConfig({//启用Loader
		enabled:true
	});
	//用Ext.application初始化一个应用
	Ext.application({   
		name : 'MA',//应用的名字
		appFolder : "app",//应用的目录
		launch:function(){//当前页面加载完成执行的函数
	        Ext.create('Ext.container.Viewport', { //简单创建一个试图
	        	layout:'auto',//自动填充布局
	            items: {
	            	xtype: 'mygrid'
	            	//items这里不须要定义title,html等属性,这些配置项在view层会配置,并且更直观,而如果在这里定义的话,它会覆盖view层配置的,
	                //title: 'gridView',
	                //html : 'List of users will go here'
	            }
	        });
		},
		controllers:[
			'gridController'
		]
	});
});