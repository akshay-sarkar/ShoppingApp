Ext.define('ShoppingApp.store.CartItems', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'cartItems',
		model: 'ShoppingApp.model.CartItem',
		listeners : {
			addrecords : function( store, records, eOpts ){
				console.log('data added successfully');
			},
			updaterecord : function( store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts ){
				console.log('data updated successfully');
			}
		}
	}
});

