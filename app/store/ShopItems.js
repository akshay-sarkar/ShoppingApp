Ext.define("ShoppingApp.store.ShopItems", {
	extend: "Ext.data.Store",
	config: {
		storeId: "shopItems",
		model: "ShoppingApp.model.ShopItem",
		filters: [{
                    property: 'exclusive',
                    value: 'yes'
                }], // filters
		data : [
			{productType: "Moto G (1st Gen) 8GB", 'exclusive': 'no',    imageUrl: "http://i-cdn.phonearena.com/images/article/50727-image/Motorola-Moto-G-to-be-released-by-Boost-Mobile.jpg" , price: "65", desc: ""},
			{productType: "Moto G (1st Gen) 16GB", 'exclusive': 'no',    imageUrl: "http://i-cdn.phonearena.com/images/article/50727-image/Motorola-Moto-G-to-be-released-by-Boost-Mobile.jpg" , price: "75", desc: ""},
			{productType: "Moto G (2nd Gen) 8GB",  'exclusive': 'no',  imageUrl: "http://i-cdn.phonearena.com/images/article/50727-image/Motorola-Moto-G-to-be-released-by-Boost-Mobile.jpg" , price: "85", desc: ""},
			{productType: "Moto G (2nd Gen) 16GB", 'exclusive': 'yes',   imageUrl: "http://i-cdn.phonearena.com/images/article/50727-image/Motorola-Moto-G-to-be-released-by-Boost-Mobile.jpg" , price: "95", desc: ""},
			{productType: "Moto X (1st Gen) 16GB", 'exclusive': 'no',    imageUrl: "http://i-cdn.phonearena.com/images/article/46737-image/Motorolas-own-website-outs-the-32GB-Motorola-Moto-X-Developer-Edition.jpg" , price: "125", desc: ""},
			{productType: "Moto X (1st Gen) 32GB", 'exclusive': 'no',    imageUrl: "http://i-cdn.phonearena.com/images/article/46737-image/Motorolas-own-website-outs-the-32GB-Motorola-Moto-X-Developer-Edition.jpg" , price: "135", desc: ""},
			{productType: "Moto X (2nd Gen) 16GB",  'exclusive': 'yes',  imageUrl: "http://i-cdn.phonearena.com/images/article/46737-image/Motorolas-own-website-outs-the-32GB-Motorola-Moto-X-Developer-Edition.jpg" , price: "145", desc: ""},
			{productType: "Moto X (2nd Gen) 32GB", 'exclusive': 'yes',   imageUrl: "http://i-cdn.phonearena.com/images/article/46737-image/Motorolas-own-website-outs-the-32GB-Motorola-Moto-X-Developer-Edition.jpg" , price: "155", desc: ""}
		]	
	}
});

