Ext.define('MA.controller.gridController', {
    extend: 'Ext.app.Controller',
	init:function(){
		this.control({
			'mygrid button[id=save]':{
				click:function(o){
					var gird = o.ownerCt.ownerCt;
					var st = gird.getStore();//得到数据集:Am.store.gridStore
					var records=st.getUpdatedRecords(); //得到修改的数据行集合
					var data = [];
					Ext.Array.each(records,function(model){
						data.push(Ext.JSON.encode(model.data));
					});
					alert(data);
					if(data==0){
						Ext.Msg.alert("提示","您没有做任何修改");
					}else{
					  	//提交后台进行添加
						Ext.Ajax.request({
							url:'../../InitGridServlet',
							params:{data:data.join(";")},
							method:'POST',
							timeout:3000,
							success:function(){
								st.commitChanges();   //取消掉修改数据的红三角标记
							}
						})
					}	
				}
			},
			'mygrid':{//单击选中时,弹出是第几行几列
				itemclick:function(View,record,item, index,e,options){
					var sm = View.getSelectionModel();
					//var p=sm.getCurrentPosition();
					//alert(p.row+'row'+','+p.column+'column');  
					//alert(Ext.JSON.encode(sm.getCurrentPosition()));
				}
			},
			//在control层找到view层,再在view层找到相应的按钮,进而添加按钮事件进行控制!在找view层时可以使用别名:如
			'mygrid button[id=selection]':{
				click:function(o){
					var gird = o.ownerCt.ownerCt;
					var sm = gird.getSelectionModel();
					//sm.deselect(1);
					var s=sm.getLastSelected();
					alert(sm.getLastSelected().get('name'))
					//alert(sm.isSelected(0));
					//sm.selectRange(1,2,true);
					//sm.selectByPosition({"row":2,"column":3});
				}
			},
			'mygrid button[id=delete]':{
				click:function(b){
					//点击按钮时要操作的是一反gird中的数据,所以要先得到grid,以下为两个从按钮得到grid容器的方法:
					//var gird =b.findParentByType("gridpanel");
					//b.ownerCt得到的为tbar这个父容器,再调用一次ownerCt即可得到tbar的父容器grid!
					var gird = b.ownerCt.ownerCt;
					//先用getSelectionModel得到选择模式,再用选择模式下getSelection得到选中的项!
					var data = gird.getSelectionModel().getSelection();
					if(data.length == 0){
						Ext.Msg.alert("提示","您最少要选择一条数据");
					}else{
						//1.先得到ID的数据
						var st = gird.getStore();
						var ids = [];
						Ext.Array.each(data,function(record){
							ids.push(record.get('id'));
						});
						alert(ids);
						//2.后台操作(delet)
						Ext.Ajax.request({
							url:'../../InitGridServlet',
							params:{ids:ids.join(",")},
							method:'POST',
							timeout:2000,
							success:function(){
								//3.前端操作DOM进行删除(ExtJs)
								Ext.Array.each(data,function(record){
									st.remove(record);
								})
							}
						})
					}
				}
			},
			'mygrid actioncolumn[id=delete2]':{
				 //函数有5个参数:面板gird,item对象,第几行,第几列,事件e
				click : function(grid,item,rowIndex,colIndex,e){
					alert(rowIndex+" "+colIndex);
				}
			}
		});
	},
	//control层是粘合剂,把M层和V层联系在一起,具体配置如下:
	//view, store,model等都会数据集合,可能有多项,所以都用得数形式
	views:['gridView'],
	stores :["gridStore"],
	models :["gridModel"] 
});