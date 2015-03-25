Ext.define('ShoppingApp.controller.MainController', {
	extend: 'Ext.app.Controller',
	
	config: {
		control: {
			'list[itemId="allItems"]': {
				itemtap: 'itemAdding'
			},
			'list[itemId="exclusiveItems"]': {
				itemtap: 'itemAdding'
			},
			'list[itemId="cartList"]': {
				itemtap: 'itemUpdate'
			},
			'button[itemId=removeAllCart]':{
				tap: 'emptyCart'	
			}
		},
		refs: {
            removeAllCartButton: 'button[itemId=removeAllCart]', //using xtype itemId
        }
	},
	itemAdding: function(list, index, target, record, evt) {
		var type = evt.event.target.type || '';
		if(type == 'button') {
			var num = evt.event.target.previousElementSibling;
			if(num.value<1){
				Ext.Msg.alert('Add Item','Please set the quantity !!');
			}else{
				
				/* Adding record to cart Items*/
				var cartItems = Ext.getStore('cartItems');
				cartItems.add({'productType': record.get('productType'), 'imageUrl':record.get('imageUrl') , 'price': record.get('price'), 'qty': num.value, 'subtotal': (num.value*record.get('price'))});
				
			    // Updating badge count
			    Constant.num += parseInt(num.value);

			    // Updating Badge Text of tab-Panel
			    var tab = Ext.getCmp('ext-tabbar-1').down('.tab[title=Cart]');
			    tab.setBadgeText(Constant.num);
			}			
		}
	},
	itemUpdate: function(list, index, target, record, evt) {
		var type = evt.event.target.type || '';
		if(type == 'button') {
			var num = evt.event.target.previousElementSibling;
			console.log(num.value);
			record.set('qty', num.value);

			var subtotal = ( num.value ) * (record.get('price'));
			record.set('subtotal' , subtotal);

			// Updating badge count
			//Constant.num += parseInt(num.value);

		    // Updating Badge Text of tab-Panel
		    //var tab = Ext.getCmp('ext-tabbar-1').down('.tab[title=Cart]');
		    //tab.setBadgeText(Constant.num);
		}
	},
	emptyCart: function(){
		console.log('emptty cart');
		var cartItems = Ext.getStore('cartItems');
		cartItems.removeAll();
	}
});