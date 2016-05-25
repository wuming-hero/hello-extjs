
Ext.onReady(function(){
    //Ext.tip.QuickTipManager.init();
    Ext.define('ForumThread', {
        extend: 'Ext.data.Model',
        fields: [
		{name:'id',type:'int',sortable:true},
		{name: 'name',  type: 'string',sortable : true},
	    {name: 'age',   type: 'int',sortable : true},
	    {name: 'email',   type: 'string',sortable : true},
	    {name: 'gender',   type: 'string',sortable : true},
	    {name: 'isIt',   type: 'string',sortable : true},
	    {name: 'birthday',   type: 'string',sortable : true},
	    {name: 'deposit',   type: 'int',sortable : true}
	    ]
    });

    var store = Ext.create('Ext.data.Store', {
		pageSize:10,
    	model: 'ForumThread',
    	autoLoad:true,
        proxy:{
		    type: 'ajax',
//        	type:'JsonP',
            url: '../../InitGridServlet',
            reader: {
            	//"root:"和"totalProperty"的值,对应返回来的json数据
                root: 'name',
                totalProperty: 'totalCount'
            },
            simpleSortMode: true
        	}
        	
    });

    var grid = Ext.create('Ext.grid.Panel', {
        width: 700,
        height: 500,
        renderTo:'gridDemo',
        title: '你妹',
        border:true,
        store: store,
        disableSelection: true,
        loadMask: true,
        columns : [ //列模式
	   		Ext.create("Ext.grid.RowNumberer",{}),//添加列number
			{text:"id",dataIndex:'id',width:35,locked:false},//  列锁定
			{text:"Name",dataIndex:'name',width:80,
				field:{
					xtype:'textfield',
					allowBlank:false
				}
			},
			{text:"age",dataIndex:'age',width:50},
			{text:"email",dataIndex:'email',width:100,
				field:{
					xtype:'textfield',
					allowBlank:false
				}
			},{  //加入1普通列即可,所以没使用xtype
				text:'gender',
				dataIndex:'gender',
				width:50,
				//DDName:'sy_gender',
				//自定义格式化函数render
				//render的使用:数据字典{业务数据字典比如风险等级,城市等这些可变的数据字典放到数据库中维护,对于不变数据字典比如男 女,是 否,人的血型等,没必要放到数据库中去维护,直接当前台缓存去做}
				renderer:function(value){
					if(value){//判断value是否有值
						if(value == "女"){
							return "<font color='green'>"+value+"</font>"
						}else if(value == "男"){
							return "<font color='red'>"+value+"</font>"
						}
					}
				}
			},
			{
				text:'isIt',
				dataIndex:'isIt',
				xtype : "booleancolumn",
				width:50,
				trueText:'是',
				falseText:'不是'
			},{  
				text:'birthday',
				dataIndex:'birthday',
				xtype : "datecolumn",
				width:100,
				format:'Y年m月d日'  //格式化日期,传进来的值:1990/02/20格式化成1990年2月20日
			},{
				text:'deposit',
				dataIndex:'deposit',
				xtype:'numbercolumn',
				width:50,
				format:'0,000'
			},
			{   //模版列模式,可以将某些隐藏的属性与显示的信息相结合,形成一段有意义的描述
				text:'描述',
				xtype:'templatecolumn',
				tpl:'姓名是{name} 年龄是{age}',
				width:150
			},
			{
			 xtype:'actioncolumn',
			 text:'Action',
			 id:'delete2',
			 header:'Action',
			 icon:'./app/view/image/delete1.png',
			 width:50
		}],
        bbar: Ext.create('Ext.PagingToolbar', {
            store: store,
            displayInfo: true,
            displayMsg: 'Displaying info {0} - {1} of {2}',
            emptyMsg: "No info to display"
        })
    });
    //store中的pageSize必须设置,置于load的方式,可直接在store中配置成autoLoad,也可按如下两种方式配置!
// 	  store.loadPage(1);
//    store.load({
//       params: { start: 0, limit: 10 }
//    });
});