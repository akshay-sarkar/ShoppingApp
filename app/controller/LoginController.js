Ext.define('ShoppingApp.controller.LoginController', {
	extend: 'Ext.app.Controller',

	config: {
		control: {
			loginButton: {
				tap: 'onLoginButtonTap'
			}
		},

		refs: {
			loginButton: 'login button' //using xtype itemId
		}
	},

	onLoginButtonTap: function(button, event, eOpts) {
		var me = this,
			form = button.up('login'),
			values = form.getValues(),
			username = values['username'],
			password = values['password'];

		me.login(username, password);
	},

	login: function(username, password) {
		//if(username == 'shopper' && password =='shopper123'){
		if(username && password) {
			var panel = Ext.create('ShoppingApp.view.Main'); // Creating View
			Ext.Viewport.setActiveItem(Ext.Viewport.add(panel)); // Adding View to Viewport and set as active.
		}
		else {
			Ext.Msg.alert('Something went wrong ..', 'Please enter your credentials !!');
		}
	}
});