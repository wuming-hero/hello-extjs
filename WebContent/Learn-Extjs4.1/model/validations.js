//将提示信息汉化,之前lengthMessage为:is wrong length.
Ext.data.validations.lengthMessage = "错误的长度";
Ext.onReady(function(){
	//扩展也就是我们自定义验证机制的的一个新的验证方法
	Ext.apply(Ext.data.validations,{
		age:function(config, value){
			var min = config.min;
			var max = config.max;
			if(min <= value && value<=max){
				return true;
			}else{
				this.ageMessage = this.ageMessage+"他的范围应该在["+min+"~"+max+"]";
				return false;
			}
		},
		ageMessage:'age数据出现的了错误'
	});
	
	
	Ext.define("person",{
		extend:"Ext.data.Model",
		fields:[
			{name:'name',type:'auto'},
			{name:'age',type:'int'},
			{name:'email',type:'auto'}
		],
			//验证规则,具体有哪些配置参数查看API
		validations:[
			{type:"length",field:"name",min:2,max:6},
			//自定义验证时验证age:
			{type:'age',field:"age",min:0,max:150}
		]
	});
	var p1 = Ext.create("person",{
		name:'uspcat.com',
		age:-26,
		email:'yunfengcheng2008@126.com'
	});	
	//调用验证函数validate();
	var errors = p1.validate();
	//定义一个错误信息数组
	var errorInfo = [];
	errors.each(function(v){
		//假设它有参数,设为v,用alert来查看v是什么数据类型,此处v为对象
		//alert(v);
		//将错误信息放入到errorInfo数组中
	errorInfo.push(v.field+"  "+v.message);
	});
	alert(errorInfo.join("\n"));
});
	/**
	 * name 2~6
	 * set(String name){
	 * 	 if(){
	 * 	 }else{
	 * 	 }
	 * }
	 */
	//新的需求:age 不能小于0也不能大于150,此时我们自定义一种验证方式,使用Ext.apply();方法,上体实现如上面代码