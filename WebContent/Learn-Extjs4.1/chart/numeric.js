Ext.onReady(function(){
	var dataStore = Ext.create("Ext.data.Store",{
		fields:[
			'name','data'
		],
		data:[
			{name:'0~10岁',data:120},
			{name:'11~18岁',data:170},
			{name:'19~24岁',data:175}
		]
	});
	var win=Ext.create("Ext.window.Window",{
		width:650,
		height:500,
		title:'年龄身高分布图',
		//shadow:false,
		maximizable:true,
		layout:'fit',
		renderTo:Ext.getBody(),
		items:[{
			xtype:'chart',
			style:'background:#fff',//控制背景颜色白色
			animate :true,//动画效果
			shadow : true,
			theme:"Category1",//皮肤
			store:dataStore,
	        axes:[{
	        	type:'Numeric',
	        	position:'left',//放置到左边
	        	dashSize:5,//引导线的宽度,即y轴刻度线上刻度的长短!!
	        	title:'身高分布(CM)',
	        	fields:['data'],//显示的数据索引
	        	majorTickSteps:10,  //在y轴增加10个横线,把y轴分成11个跨度,每个跨度为5
	        	minorTickSteps:4,   //第个跨度之间再添加4个等分线把这个跨度等分为5份
	        	grid:{
	        		odd:{//奇数行
	        			opacity:1,//不透明
	        			stroke:'#bbb',
	        			'stroke-width':2//表格线宽
	        		},
	        		even:{//偶数行
	        			opacity:2,//不透明
	        			stroke:'#DDD',
	        			'stroke-width':2//表格线宽
	        		}
	        	}
	        },{
	        	type:'Category',
	        	position:'bottom',
	        	fields:['name'],
	        	title:'年龄段',
	        	grid:true
	        }],//轴
	        series:[{
	        	type:'line',
	        	axis:'left',
		       	xField: 'name',
		        yField: 'data',
		        highlight:true,
		        tips:{
				  trackMouse: true,
				  width: 140,
				  height: 28,
				  renderer: function(storeItem, item) {
				    this.setTitle(storeItem.get('name') + ': ' +
				    storeItem.get('data') + 'CM');
				  }
		        }
	        }]//序列
		}]
	});
	win.show();
});