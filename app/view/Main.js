Ext.define('ShoppingApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
		'Ext.dataview.List'
    ],
    config: {
        tabBarPosition: 'top',
		tabBar: {
            layout: {
                pack : 'left'
            }
        },
        items: [
            {
                title: 'Exclusives',
                iconCls: 'favorites',
				itemId: 'exclusivePage',
                items: [
                    {
						xtype: 'list',
						height: '100%',
						itemId: 'exclusiveItems',
						store: 'shopItems',
						selectedCls: '',
						pressedCls:'',
						itemTpl: '<div style="overflow:hidden;width:100%;">'+
									'<image src={imageUrl} class="listImage"/>'+
										'<div class="box">'+
											'<div class="title">{productType}</div><br>'+
											'<div class="price"> <span class="floatLeft">${price}</span> <input type="number" value="0" min="0" max="10" class="display320"/> <input type="button" value="Add" class="x-button-action x-button boxButton display320"/></div>'+
										'</div>'+
										'<div class="boxRight">'+
											'<input type="number" value="0" min="0" max="10"/>'+
											'<input type="button" value="Add" class="x-button-action x-button boxButton"/>'+
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
                iconCls: 'home',
				itemId: 'allPage',
                items: [
                    {
						xtype: 'list',
						height: '100%',
						itemId: 'allItems',
						selectedCls: '',
						pressedCls:'',
						store: 'shopItems',
						itemTpl: '<div style="overflow:hidden;width:100%;">'+
									'<image src={imageUrl} class="listImage">'+
									'<div class="box">'+
										'<div class="title">{productType}</div><br>'+
										'<div class="price"> <span class="floatLeft">${price}</span> <input type="number" value="0" min="0" max="10" class="display320"/> <input type="button" value="Add" class="x-button-action x-button boxButton display320"/> </div> '+
									'</div>'+
									'<div class="boxRight">'+
										'<input type="number" value="0" min="0" max="10"/>'+
										'<input type="button" value="Add" class="x-button-action x-button boxButton"/>'+
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
            },
			{
                title: 'Cart',
                iconCls: 'action',
				iconAlign: 'right',
				itemId: 'cartPage',
                items: [
                    {
						xtype: 'list',
						height: '92%',
						store: 'cartItems',
						itemId: 'cartList',
						selectedCls: '',
						pressedCls:'',
						itemTpl: '<div style="overflow:hidden;height:100%;">'+
									'<image src={imageUrl} class="listImage">'+
									'<div class="box">'+
										'<div class="title">{productType}</div><br>'+
										'<div class="price floatRight"> ${price}</div>'+
									'</div>'+
									'<div class="boxRight cartMobile">'+
										'<div class="floatRight">Quantity <input type="number" value="{qty}" min="1" max="10"/>'+
										'<input type="button" id="update" value="Update" class="x-button-action x-button" style="display: inline;margin: 0.5em;border: #a6a6a6;"/>  <br></div>'+
										'<div style="margin-top: 10px;"> Subtotal : {subtotal}'+
										'<input type="button" id="remove" value="Remove Item" class="x-button-action x-button" style="display: inline;margin: 0.5em;border: #a6a6a6;"/>  <br></div>'+
									'</div>'+
								 '</div>'
                    },
                    {
		            	xtype: 'panel',
		            	itemId: 'totalAmountCart',
		            	cls: 'totalAmountCart',
		            	html: 'Total Amount : '+ Constant.total+ ' $',
		            },
                    {
			            xtype : 'titlebar',
			            docked: 'bottom',
			            title: 'Total Amount : '+ Constant.total,
			            itemId: 'totalAmount',
			            items: [
			            		{
						            text: 'Remove All',
						            align: 'left',
						            itemId: 'removeAllCart'
						        },
						        {
						            text: 'Proceed to Pay',
						            align: 'right',
						            itemId: 'ProceedPay'
						        }
			            ]
			        },
                ]
            }
        ],
		listeners:{
			 show: function( e, eOpts ){
				console.log('show called');
				// -------- Performance Optimization ---------
				// Creating Proceed to pay panel
			 	if(!Constant.uiComponentsExist.CompleteOrder){
					var panel = Ext.create('ShoppingApp.view.CompleteOrder'); // Creating View
        			Ext.Viewport.add(panel); // Adding View to Viewport
        			Constant.uiComponentsExist.CompleteOrder = true;

        			//Adding to UI Complnent Only Once...
        			Constant.uiComponents.cartTab = Ext.getCmp('ext-tabbar-1').down('.tab[title=Cart]');
					Constant.uiComponents.totalAmount = Ext.ComponentQuery.query('#totalAmount');

					Constant.uiComponents.totalAmountCart = Ext.ComponentQuery.query('#totalAmountCart');
        			
        			//set CheckoutAmount
        			Constant.uiComponents.checkoutTotalAmount = Ext.ComponentQuery.query('#checkoutTotalAmount')[0];
        			Constant.uiComponents.totalAmountComplete = Ext.ComponentQuery.query('#totalAmountComplete')[0];
        		}

        		Constant.uiComponents.totalAmount[0].setTitle('Total Amount : '+ Constant.total + '$');
        		Constant.uiComponents.totalAmountCart[0].setHtml('Total Amount : '+ Constant.total + '$');
        		Constant.uiComponents.cartTab.setBadgeText(Constant.badgeText);
			 }
		}
    }
});
