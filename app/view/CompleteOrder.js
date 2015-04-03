Ext.define('ShoppingApp.view.CompleteOrder', {
    extend: 'Ext.Panel',
    xtype: 'completeorder',
    requires: [
        'Ext.Toolbar'
    ],
    config: {
    	height: '100%',
    	fullscreen: true,        
        items: [
           {
				xtype: 'toolbar',
				docked: 'top',
				title: 'Checkout',
				items:[
					{
			            text: 'Back',
			            align: 'left',
			            itemId: 'backButton',
			            ui: 'back',
			            listeners: {
			            	tap: function(){
			            		console.log(' back button tapped');
			            		var viewItems = Ext.Viewport.getItems();
			            		Ext.Viewport.setActiveItem(viewItems.items[viewItems.items.length -2]);
			            	}
			            }
					}
				]
		   },
		   {
		   		xtype : 'container',
				layout:  'fit',
				cls: 'ks-basic',
				items:[
						{
							xtype: 'dataview',
							store: 'cartItems',
							scrollable: 'horizontal',
							cls: 'dataview-horizontal',
							height : '6.5em',
							inline:{
								wrap : false
							},
							itemTpl: '<div style="height:100px;">'+
										'<image src={imageUrl} height="100" width="100" style="float:left;">'+
										'<div class="box">'+
											'<div>{productType}</div><br>'+
											'<div>Quantity : {qty}</div>'+
											'<div style="margin-top: 10px;"> Subtotal : {subtotal}</div>'+
										'</div>'+
									'</div>'
						}
					]
            },
			{
				xtype : 'panel',
				id: 'deliveryDetails',
				height : 'auto',
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
							id: 'deliveryFieldset',
							title: 'Delivery Details',
							items:[
								{
									xtype: 'textfield',
									id: 'fullname',
									required: true,
									placeHolder: 'Full Name',
									//value: 'user'
								},
								{
									xtype: 'emailfield',
									id: 'email',
									required: true,
									placeHolder: 'Email (user@gmail.com)'
									//value: 'user@gmail.com'									
								},
								{
									xtype: 'textfield',
									id: 'mobile',
									required: true,
									placeHolder: 'Mobile No (+91-7795215218)'
									//value: '7795215218'									
								},
								{
									xtype: 'textareafield',
									id: 'address',
									required: true,
									placeHolder: 'Delivery Address',
									value: ''									
								}
							]
					   }
				]
			},
			{
                xtype: 'titlebar',
				docked: 'bottom',
				title: 'Total Amount : '+ Constant.total,
				itemId: 'totalAmount',
                items: [
	                    {
	                        text: 'Submit Order',
	                        align: 'right',
	                        handler: function(btn){
	                           
	                        }
	                    },
	                    {
	                        text: 'Reset Form',
	                        align: 'left',
	                        handler: function(){
	                            //Ext.getCmp('basicform').reset();
	                        }	
	                    }
                ]
            }
        ]
    }
});
