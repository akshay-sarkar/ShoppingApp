Ext.define('ShoppingApp.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',
    requires: [
        'Ext.Toolbar'
    ],
    config: {
        
        items: [
           {
				xtype: 'titlebar',
				docked: 'top',
				title: 'Shopping App'
		   },
			{
				xtype : 'panel',
				id: 'usercrendentials',
				layout: {
					type: 'vbox',
					align: 'center',
					pack: 'center'
				},
				defaults: {
					width: '70%'
				},
				items:[
						{
							xtype: 'fieldset',
							id: 'fieldset',
							title: 'Log in to account',
							items:[
								{
									xtype: 'textfield',
									id: 'username',
									required: true,
									placeHolder: 'Email Id / Username',
									clearIcon : false,
									value: 'user'
								},
								{
									xtype: 'passwordfield',
									id: 'password',
									required: true,
									placeHolder: 'Password',
									clearIcon : false,
									value: 'user'									
								}
							]
					   },
					   {
							xtype: 'panel',
							layout: {
								type: 'vbox',
								align: 'stretch',
								pack: 'start'
							},
							items: [
								{
									xtype: 'button',
									text: 'login',
									iconCls: 'arrow_right',
									iconAlign: 'right',
									itemId: 'login'
								},
								// {
								// 	html: '<a href="#">Forgot Your Password??</a>',
								// 	cls: 'textAlignCenter',
								// 	margin: '25 0 0 0',
								// 	id: 'forgotCredentialLink',
								// 	initialize: function() {
								// 		this.element.on({
								// 			tap: function() { console.log('tapped!'); }
								// 		});
								// 	}
								// }
								
							]
						}
				]
			}
        ]
    }
});
