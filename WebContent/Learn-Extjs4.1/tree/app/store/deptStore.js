Ext.define("AM.store.deptStore",{
	extend:'Ext.data.TreeStore',
	defaultRoodId:'root',
	model:'AM.model.deptModel',
	proxy:{
		type:'ajax',
		url:'./app/store/tree.jsp',
		reader:'json',
		autoLoad:true
	}
	/* sorters: [{
            property: 'leaf'
            //sdirection: 'ASC'
        }, {
            property: 'text'
           // direction: 'ASC'
        },{
        	 property: 'checked'
        }
        ]*/
});
			