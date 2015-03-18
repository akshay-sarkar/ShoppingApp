Ext.define('ShoppingApp.model.ShopItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['productType', 'imageUrl' , 'price' , 'desc', 'exclusive']
    }
});