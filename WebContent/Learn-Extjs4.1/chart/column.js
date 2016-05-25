Ext.onReady(function(){
  //定义数据集合
  var columnStore1 =  Ext.create('Ext.data.JsonStore', {
    	fields: ['name', 'data'],
	    data: [
	    	{name:"0~10岁",data:20},
	    	{name:"11~18岁",data:60},
	    	{name:"19~24岁",data:30}
	    ]
	});
  var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        closeAction:'hide',
        maximizable: true,
        title: '柱形图展示图表',  
        layout: 'fit',
        tbar: [{
            text: '改变数据',
            handler: function() {
                columnStore1.loadData([
			    	{name:"0~10岁",data:50},
			    	{name:"11~18岁",data:30},
			    	{name:"19~24岁",data:20}
			    ]);
            }
        }],
        items: {
            xtype: 'chart',
            style: 'background:#fff',  //白色的背景色
            id: 'chartCmp',
            animate: true,
            shadow: true,
            store: columnStore1,   //数据来源
            axes: [{//轴
                type: 'Numeric',
                position: 'left',
                fields: ['data'],
                title: '人数',
                grid: true,
                majorTickSteps:5,  //在y轴增加10个横线,把y轴分成11个跨度,每个跨度为5
	        	minorTickSteps:9,   //第个跨度之间再添加4个等分线把这个跨度等分为5份
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: '年龄段'
            }],//序列
            series: [{//列
                type: 'column',
                axis: 'left',
                highlight: true,
                xField: 'name',
                yField: 'data',
                label:{ //控制柱形图label
                  	display: 'insideEnd',
                  	'text-anchor': 'middle',
	                field: 'data',
	                renderer: Ext.util.Format.numberRenderer('0'),
	                orientation: 'vertical',
	                color: '#333'
                }
               /* tips: {//提示
                  trackMouse: true,
                  width: 100,
                  height: 20,
                  renderer: function(storeItem,item) {
                    	this.setTitle(storeItem.get('name') + ': ' 
                    	+ storeItem.get('data') + ' 名');                  	
                  }
                },*/
                //格式化
	           /* renderer: function(sprite, record, attr, index, store){
	                    var fieldValue = Math.random() * 20 + 10;
	                    var value = (record.get('data') >> 0) % 3;
	                    var color = ['rgb(213, 70, 121)', 
	                                 'rgb(44, 153, 201)', 
	                                 'rgb(146, 6, 157)', 
	                                 'rgb(49, 149, 0)', 
	                                 'rgb(249, 153, 0)'][value];
	                    return Ext.apply(attr, {
	                        fill: color
	                    });
	            } */                 
                
            }]
        }
    });
    win.show();
});    