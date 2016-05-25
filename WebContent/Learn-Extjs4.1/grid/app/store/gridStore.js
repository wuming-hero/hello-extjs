//User数据集合
Ext.define('MA.store.gridStore', {
	extend: 'Ext.data.Store',
	model: 'MA.model.gridModel',
	storeId: 's_user',
	pageSize:10,
	proxy:{
	    type:'ajax',
	    url:'../../InitGridServlet',
	    reader: {
	        type: 'json',
	        root: 'name',
	        totalProperty:'totalCount'
	    },writer:{
			type:'json'
		}
	},
	//groupField:'gender',
	autoLoad: true //很关键

});
	//store中的pageSize必须设置,置于load的方式,可直接在store中配置成autoLoad,也可按如下两种方式配置!
//	gridStore.load:{
//		params:{
//			start:0,
//			pagesize:5
//		}
//	}

//gridStore.loadPage(1);
