Ext.define('ShoppingApp.controller.MainController', {
    extend: 'Ext.app.Controller',
	
	config: {
		control: {
			'list[itemId="allItems"]': {
				itemtap: 'itemAdding'
			}
		},
	},
    itemAdding: function(list, index, target, record, evt) {
		var type = evt.event.target.type || '';
		if(type == 'button') {
			var num = evt.event.target.previousElementSibling;
			if(num.value<1){
				Ext.Msg.alert('Add Item','Please set the quantity !!');
			}else{
				//'productType', 'imageUrl' , 'price' , 'desc', 'exclusive', 'qty'
				var cartItems = Ext.getStore('cartItems');
				var model = cartItems.add(record);
				model[0].data.qty = num;
				for(var i = 0; i < cartItems.getCount(); i++ ) {
				   var record = cartItems.getAt(i)
				   console.log(record.get('productType'));
				}
			}
			
		}
	}
});