Ext.onReady(function(){
	//用regModel定义一个类,此时不用写extend:"Ext.data.Model",
	Ext.regModel("user",{
		fields:[
			{name:'name',type:'string'},
			{name:'age',type:'int'}
		]
	});
	//不用create方法 我们直接用proxy来创建对象数据
	var userData = [
		{name:'uspcat.com',age:1},
		{name:'yunfengcheng',age:26}
	];
	//创建model的代理类
	var memoryProxy = Ext.create("Ext.data.proxy.Memory",{
		data:userData,
		model:'user'
	});
	//就可以做CRUD了
	//update,首先push一组新的数据:
	//alert(userData[1].name);
	userData.push({name:'new uspcat.com',age:1});
	//read
	memoryProxy.read(new Ext.data.Operation(),function(result){
		//alert(result);
		var datas = result.resultSet.records;
		Ext.Array.each(datas,function(model){
			alert(model.get('name'));
		})
	});
});
