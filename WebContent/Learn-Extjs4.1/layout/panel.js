Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.panel.Panel',{
	    title: '[01]面板的头部[Ext.panel.Header]',
	    width: 500,
	    bodyPadding : 10,//边距
	    height: 400,
	    renderTo: Ext.getBody(),
	    hideCollapseTool:false,
	    collapsible :true,
	    animCollapse : false,//控制动画
	    frame : true,//渲染面板
	    autoLoad:'ass.html',//只要不是null自动加载内容,且优先级高于html属性!!
	    html: '<p>[02]面板体</p>',//和上面的属性是冲突的
	    autoScroll:true,//自动滚动条
	    closable:true,//运行客户关闭
	    closeAction:'destroy',//设置关闭动作[destroy|hide]
		bodyStyle: {
		    background: '#ffc'
		},	    
	    tbar: [
		  { xtype: 'button', text: '[03]顶部工具栏' }
		],
		bbar: [
		  { xtype: 'button', text: '[04]底部工具栏 ' }
		],
		dockedItems: [{
		    xtype: 'toolbar',
		    dock: 'bottom',
		    ui: 'footer',
		    items: [
		        { xtype: 'component', flex: 1 },
		        { xtype: 'button', text: '[05]面板底部',
		        	handler:function(b){
		        		b.up("panel").removeAll(true)//自动销毁
		        	}
		        }
		    ]
		}],
		tools:[{
		    type:'refresh',
		    qtip: '刷新'
		},{
		    type:'help',
		    qtip: '帮助'
		},{
			id:'next',
		    handler: function(event, toolEl, panel){
		    	panel.up("panel").insert(0,{
		    			xtype:'panel',
		    			width:100,
		    			height:100,
		    			bodyStyle: {
						    background: 'red'
						}
		    		}) 
		    }
		}]		
	});
});