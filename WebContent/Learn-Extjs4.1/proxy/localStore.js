Ext.onReady(function(){
		Ext.regModel("user",{
		fields:[{name:'name',type:'string'}],
		proxy:{
			
			//浏览器级别的代理,刷新里alert弹出框中的数目不断增加,关闭后再打开,数据不丢失,继续增加,但前提是浏览器要记住cookies.但不能跨浏览器
			type:'localstore',
			id  : 'twitter-Searches'
		}
	});
	//我们用store来初始化数据
	var store = new Ext.data.Store({
		model:user
	});
	store.add({name:'uspcat.com'});
	//store调用sync方法保存数据
	store.sync();
	store.load();
	//初始化一个数组msg,将遍历后的数据存储其中
	var msg = [];
	store.each(function(rec){
		msg.push(rec.get('name'));
	});
	alert(msg.join("\n"));
});
	