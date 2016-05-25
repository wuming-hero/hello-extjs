Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.create("Ext.form.Panel", {
		title : '本地FieldSet实例',
		renderTo : Ext.getBody(),
		bodyPadding : '5 5 5 5',
		height : 300,
		width : 270,
		frame : true,
		items : [{
					title : '组合1',
					xtype : 'fieldset',
					collapsible : true,// 可以展示伸缩的按钮
					defaultType : 'textfield',
					layout : 'anchor',
					defaults : {
						anchor : '95%'
					},
					items : [{
								fieldLabel : 'Name',
								name : 'name'
							}, {
								fieldLabel : 'Email',
								name : 'Email'
							}]
				}, {
					title : '组合2',
					xtype : 'fieldset',
					checkboxToggle : true,// 启用复选框
					defaultType : 'textfield',
					collapsed : true,// true默认set是收起的
					layout : 'anchor',
					defaults : {
						anchor : '95%'
					},
					items : [{
								fieldLabel : 'PASS',
								name : 'PASS'
							}, {
								fieldLabel : 'INFO',
								name : 'INFO'
							}]
				}],
		buttons : [{
					text : '提交',
					handler : function() {
						this.up("form").getForm().submit({
									params : {
										info : 'age是隐藏字段'
									}
								});
					}
				}]
	});
});