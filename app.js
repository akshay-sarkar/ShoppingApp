/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
Ext.Loader.setConfig({
    disableCaching : false,
    paths          : {
        'Constant' : 'app/lib/Constants.js'
    }
});

Ext.application({
    name: 'ShoppingApp',

    requires: [
        'Ext.MessageBox',
		'Ext.form.FieldSet',
		'Ext.field.Password',
		'Constant',
        'Ext.field.Email',
        'Ext.field.TextArea'        
    ],

    views: [
        'Login','Main','CompleteOrder','DeliveryForm'
    ],
	
	controllers: [
		'LoginController', 'MainController'
	],
	
	models: [
		'ShopItem', 'CartItem','DeliveryDetails'
	],
	
	stores: [
		'ShopItems', 'CartItems'
	],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        console.log('launched app');
        // -------- Performance Optimization ---------
        Constant.store.cartItems = Ext.getStore('cartItems');
        Constant.uiComponentsExist.CompleteOrder = false;
        //Constant.uiComponents.cartTab = Ext.getCmp('ext-tabbar-1').down('.tab[title=Cart]');

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('ShoppingApp.view.Login'));

        // Addidng Object Property ---
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        Object.isEmpty = function (obj) {

            // null and undefined are "empty"
            if (obj == null) return true;

            // Assume if it has a length property with a non-zero value
            // that that property is correct.
            if (obj.length > 0)    return false;
            if (obj.length === 0)  return true;

            // Otherwise, does it have any properties of its own?
            // Note that this doesn't handle
            // toString and valueOf enumeration bugs in IE < 9
            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) return false;
            }

            return true;
        }
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
