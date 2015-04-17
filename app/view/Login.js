Ext.define('ShoppingApp.view.Login', {
	extend: 'Ext.form.Panel',
	xtype: 'login',

	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.field.Password',
		'Ext.Button'
	],

	config: {
		fullscreen: true,
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title: 'Shopping App'
		}, {
			xtype: 'fieldset',
			title: 'Log in to account',
			style: {
				margin: '9px 15% 28px'
			},
			defaults: {
				required: true,
				clearIcon: false
			},
			items: [{
				xtype: 'textfield',
				name: 'username',
				placeHolder: 'Email Id / Username'
			}, {
				xtype: 'passwordfield',
				name: 'password',
				placeHolder: 'Password'
			}]
		}, {
			xtype: 'button',
			height: 40,
			style: {
				margin: 'auto 15%'
			},
			text: 'login',
			iconCls: 'arrow_right',
			iconAlign: 'right'
		}]
	}
});