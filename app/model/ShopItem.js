Ext.define('ShoppingApp.model.ShopItem', {
    extend: 'Ext.data.Model',
    config: {
    	storeId: 'shopItems',
        fields: [
        	{	name: 'id'},
	        {	name: 'productType', type: 'string'},
	        {  	name: 'imageUrl', type: 'string'},
	        {	name: 'price' , type: 'int'},
	        {	name: 'desc',  type: 'string'},
	        {	name: 'exclusive',  type: 'string'} 
         ]
    }
});