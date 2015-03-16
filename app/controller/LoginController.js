Ext.define('ShoppingApp.controller.LoginController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            loginButton: {
                tap: 'doLogin'
            }
        },

        refs: {
            loginButton: 'login button[itemId=login]', //using xtype itemId
        }
    },

    doLogin: function() {
        //called whenever the Login button is tapped
		var username = Ext.getCmp('username').getValue();
		var password = Ext.getCmp('password').getValue();
		//if(username == 'shopper' && password =='shopper123'){
		if(username && password){
				console.log(username + password);
				var panel = Ext.create('ShoppingApp.view.Main'); // Creating View
				Ext.Viewport.setActiveItem(Ext.Viewport.add(panel)); // Adding View to Viewport and set as active.
		}else{
			Ext.Msg.alert('Something went wrong ..','Please enter your credentials !!');
		}
    }
});