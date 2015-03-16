Ext.define('ShoppingApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'top',

        items: [
            {
                title: 'Exclusive Item',
                iconCls: 'home',

                items: [
                    {
						xtype: 'list',
						height: '100%',
						store: 'shopItems',
						itemTpl: '{lastName}, {firstName}'
                    }
                ]
            },
            {
                title: 'Show All',
                iconCls: 'action',

                items: [
                    {
						xtype: 'list',
						itemTpl: '{title}',
						height: '100%',
						data: [
							{ title: 'Item 1' },
							{ title: 'Item 2' },
							{ title: 'Item 3' },
							{ title: 'Item 4' }
						]
					
                    }
                ]
            }
        ]
    }
});
