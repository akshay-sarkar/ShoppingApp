Ext.define('ShoppingApp.model.ShopItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id','productType', 'imageUrl' , 'price' , 'desc', 'exclusive']
    }
});