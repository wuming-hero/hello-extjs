(function(){
	Ext.onReady(function(){
		Ext.regModel("person",{
			fields:[
				{name:'name',type:'string'}
			],
			proxy:{
				type:'jsonp',
				//访问外网,得到相应的数据,完成跨域
				url:'http://www.uspcat.com/extjs/person.php'
			}
		});
		var person = Ext.ModelManager.getModel('person');
		person.load(1,{
			scope:this,
			success:function(model){
				alert(model.get('name'));
			}
		});
	})
})();