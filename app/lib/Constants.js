Ext.define('Constant', {
    statics     : {
		VERSION : '0.2',
		num : 0,
		total: 0
	},
    constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});