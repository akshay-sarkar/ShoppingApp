Ext.define('Constant', {
    statics     : {
		VERSION : '0.2',
	},
    constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});