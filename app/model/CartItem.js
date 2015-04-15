Ext.define('ShoppingApp.model.CartItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
	        {	name: 'productType', type: 'string'},
	        {  	name: 'imageUrl', type: 'string'},
	        {	name: 'price' , type: 'int'},
	        {	name: 'qty',  type: 'int'} ,
	        {	name: 'subtotal',  type: 'string'} 
         ]
    }
});