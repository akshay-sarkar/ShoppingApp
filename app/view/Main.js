Ext.define('ShoppingApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
		'Ext.dataview.List'
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
						itemTpl: '<div style="height:100px;">'+
									'<image src={imageUrl} height="100" width="100" style="float:left;">'+
									'<div class="box">'+
										'<div class="title">{productType}</div><br>'+
										'<div class="price"> ${price}</div>'+
									'</div>'+
									'<div class="boxRight">'+
										'Qty <input type="number" value="0" min="0" max="10"/>'+
									'</div>'+
								 '</div>'
                    }
                ],
				listeners:{
					show: function( e, eOpts ){
						var store = Ext.getStore('shopItems');
						store.filter('exclusive', 'yes');
					}
				}
            },
            {
                title: 'Show All',
                iconCls: 'action',

                items: [
                    {
						xtype: 'list',
						height: '100%',
						store: 'shopItems',
						itemTpl: '<div style="height:100px;">'+
									'<image src={imageUrl} height="100" width="100" style="float:left;">'+
									'<div class="box">'+
										'<div class="title">{productType}</div><br>'+
										'<div class="price"> ${price}</div>'+
									'</div>'+
									'<div class="boxRight">'+
										'Qty <input type="number" value="0" min="0" max="10" />'+
									'</div>'+
								 '</div>'
                    }
                ],
				listeners:{
					show: function( e, eOpts ){
						var store = Ext.getStore('shopItems');
						store.clearFilter();
					}
				}
            }
        ]
    }
});
