Ext.define("ShoppingApp.store.CartItems", {
	extend: "Ext.data.Store",
	config: {
		storeId: "cartItems",
		model: "ShoppingApp.model.CartItem"
	}
});

