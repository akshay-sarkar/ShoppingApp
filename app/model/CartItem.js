Ext.define('ShoppingApp.model.CartItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['productType', 'imageUrl' , 'price', 'qty']
    }
});