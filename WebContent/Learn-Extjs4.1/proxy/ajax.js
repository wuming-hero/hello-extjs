(function(){
	Ext.onReady(function(){
		Ext.regModel("person",{
			fields:[{name:'name',type:'string'}]
		});
		var ajaxProxy = new Ext.data.proxy.Ajax({
			url:'person.jsp',
			model:'person',
			reader:'json',
			limitParam : 'indexLimit'
		});	
		ajaxProxy.doRequest(new Ext.data.Operation({
				action:'read',
				limit:10,       //分页:每页显示10条
				start :1,       //从第一页开始
				  //排序
				sorters:[        
					new Ext.util.Sorter({
						property:'name',
						direction:'ASC'
					})
				]
			}),function(o){
				//alert(o); //查看函数返回的类型
			var text = o.response.responseText;  //得到一个json对象{name:'uspcat.com'}
			alert(Ext.JSON.decode(text)['name']); //将json字符串变成数据对象:uspcat.com
		});
	});
})();