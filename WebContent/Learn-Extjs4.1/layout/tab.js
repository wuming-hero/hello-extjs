Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.tab.Panel', {
	    width: 400,
	    height: 230,
	    renderTo: Ext.getBody(),
		items: [{
        	title: '第一个选项卡'
	    }, {
	        title: '第二个选项卡'
	    }],
	    buttons:[{
	    	text:'增加选项卡',
	    	handler:function(btn){
	    		var panel = btn.up("tabpanel");
	    		var index = panel.items.length+1;
	    		var tabPage = panel.add({
	    			title: '第'+index+'个选项卡',
	    			html:'我新添加的tab',
	    			closable:true
	    		});
	    		panel.setActiveTab(tabPage);//启用激活他
	    	}
	    }]
	});
});