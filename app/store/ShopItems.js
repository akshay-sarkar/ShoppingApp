Ext.define("ShoppingApp.store.ShopItems", {
	extend: "Ext.data.Store",
	config: {
		storeId: "shopItems",
		model: "ShoppingApp.model.ShopItem",
		data : [
			{firstName: "Ed",    lastName: "Spencer"},
			{firstName: "Tommy", lastName: "Maintz"},
			{firstName: "Aaron", lastName: "Conran"},
			{firstName: "Jamie", lastName: "Avins"}
		]	
	}
});