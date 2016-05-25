(function(){
	Ext.onReady(function(){
		Ext.regModel("user",{
			fields:[
				{name:'name',type:'string'}
			],
			proxy:{
				//单浏览器级别,关闭浏览器后数据丢掉,重新打开浏览器后弹出数据从第一条重新开始
				type:'sessionstorage',
				id  : 'twitter-Searches'
			}
		});
		//我们用store来初始化数据
		var store = new Ext.data.Store({
			model:user
		});
		store.add({name:'yunfengcheng'});
		store.sync();
		store.load();
		var msg = [];
		store.each(function(rec){
			msg.push(rec.get('name'));
		});
		alert(msg.join("\n"));
	})
})();
	