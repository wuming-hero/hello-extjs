Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.panel.Panel',{
		//面板五部分构成:面板头部,面板底部,面板体,顶部和底部工具栏,
	    title: '[01]面板的头部[Ext.panel.Header]',
	    width: 500,
	    bodyPadding : 10,//边距:面板体中的字到边的距离
	    height: 400,
	    renderTo:Ext.getBody(),
	    collapsible :true,      //是否可以收起
	    hideCollapseTool:false,  //隐藏收起按钮
	    animCollapse : true, //
	    frame : true,   //加边框渲染面板
	    autoLoad:'ass.html',   //只要不是null就会自动加载内容,且优先级高于下面html配置项
	    html: '<p>[2]面板体</p>',//和上面的属性是冲突的
	    autoScroll:true,   //自动滚动条
	    closable:true,    //关闭按钮
	    closeAction:'destroy',//设置关闭动作[destroy|hide]
		bodyStyle: {background: '#ffc'},	    
	    tbar: [{ xtype: 'button', text: '[03]顶部工具栏' }],
		bbar: [{ xtype: 'button', text: '[04]底部工具栏 ' }],
		dockedItems: [{
		    xtype: 'toolbar',
		    dock: 'bottom',
		    ui: 'footer',
		    items: [
		        { xtype: 'component', flex: 1 }, //起到排版作用,让button排到右下角
		        { xtype: 'button', text: '[05]面板底部',
		        	handler:function(b){
		        		b.up("panel").removeAll(true)//自动销毁
		        	}
		        }
		    ]
		}],
		tools:[{
		    type:'refresh',
		    tooltip: '刷新' //鼠标放在上面显示的信息,和下面的qtip有相同效果
		    //qtip: '刷新'  //鼠标放在节点上显示的信息
		},{
		    type:'help',
		    qtip: '帮助'
		},{
			id:'next',
		    handler: function(event, toolEl, panel){
		    	panel.up("panel").insert(1,{
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
/**
	close
    collapse
    down
    expand
    gear
    help
    left
    maximize
    minimize
    minus
    move
    next
    pin
    plus
    prev
    print
    refresh
    resize
    restore
    right
    save
    search
    toggle
    unpin
    up
*/




