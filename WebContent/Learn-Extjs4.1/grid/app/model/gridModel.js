//数据存储模型
Ext.define('MA.model.gridModel', {
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

