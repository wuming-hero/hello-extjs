Ext.onReady(function(){
	Ext.QuickTips.init();
	var navigate = function(panel, direction,btn){
	    var layout = panel.getLayout();
	    layout[direction]();
	    //next(),prev()
	    //card的关键函数next( ) : Ext.Component,prev( ) : Ext.Component
	    //getNext( ) : Ext.Component,getPrev( ) : Ext.Component
	    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());  //上一页没有面板 的话就把'上一页'这个按钮设成不可用
	    Ext.getCmp('move-next').setDisabled(!layout.getNext());
	};
	Ext.create('Ext.Panel', {
	    width: 500,
	    height: 280,
	    layout: 'card',//设置布局
	    activeItem:0,//默认展示的子节点索引
	    renderTo:Ext.getBody(),
	    items: [{
	    	id: 'card-0',
	        xtype: 'panel',
	        title: '第一个面板',
	        html:'第一个面板'
	    },{
	    	id: 'card-1',
	        xtype: 'panel',
	        title: '第二个面板',
	        html:'第二个面板'
	    },{
	    	id: 'card-3',
	        xtype: 'panel',
	        title: '第三个面板',
	        html:'第三个面板'
	    }],
	    index:1,//自定义索引
	   	titleInfo: "cardt布局的面板",
	   	listeners: {
	   		render:function(){ 
	   			var panel = this;
	   			panel.setTitle(panel.titleInfo+"("+(this.activeItem+1)+"/"+panel.items.length+")");
	   		}
	   	},
	    bbar: [{
	            id: 'move-prev',
	            text: '上一页',
	            handler: function(btn) {
	            	var panel = btn.up("panel");
	            	panel.index = panel.index-1;
	            	panel.setTitle(panel.titleInfo+"("+panel.index+"/"+panel.items.length+")");
	                navigate(panel, "prev");
	            },
	            disabled: true
	        },
	        '->',    //使'上一页'和'下一页'位于面板下面的两个角落
	        {
	            id: 'move-next',
	            text: '下一页',
	            handler: function(btn) {
	            	var panel = btn.up("panel");
	            	panel.index = panel.index+1;
	                panel.setTitle(panel.titleInfo+"("+panel.index+"/"+panel.items.length+")");	            	
	                navigate(panel, "next");
	            }
	        }
	    ]
	});
});