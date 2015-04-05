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
			            		Ext.Viewport.setActiveItem('main');
			            	}
			            }
					}
				]
		   },
		   {
		   		xtype : 'container',
				layout:  'fit',
				cls: 'ks-basic',
				height : '6.5em',
				items:[
						{
							xtype: 'dataview',
							store: 'cartItems',
							scrollable: 'horizontal',
							cls: 'dataview-horizontal',
							inline:{
								wrap : false
							},
							itemTpl: '<div style="overflow:hidden;width:100%;">'+
										'<image src={imageUrl} class="listImage">'+
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
				xtype : 'deliveryform',
				id: 'deliveryDetailsForm',
				height : '100%',
				cls: 'detailsForm',
				layout: {
					type: 'vbox',
					align: 'center'
				}
			},
			{
                xtype: 'titlebar',
				docked: 'bottom',
				title: 'Total Amount : '+ Constant.total,
				itemId: 'checkoutTotalAmount',
                items: [
	                    {
	                        text: 'Submit Order',
	                        align: 'right',
	                        handler: function(btn){

	                        	var formObj = Ext.getCmp('deliveryDetailsForm');
								var formData = formObj.getValues();
								 
								var usr = Ext.create('ShoppingApp.model.DeliveryDetails',{
									 fullname: formData.fullname,
									 email:formData.email,
									 mobile:formData.mobile,
									 address: formData.address
								});
								 
								var errs = usr.validate();
								var msg = '';
								 
								if (!errs.isValid()) {
								   errs.each(function (err) {
								   		msg += err.getField() + ' : ' + err.getMessage() + '<br/>';
								   });
								 
								   Ext.Msg.alert('ERROR', msg);
								 
								} else {
									  Ext.Msg.alert('SUCCESS', 'Order Placed Successfully !! <br>Emptying Cart Now ..');
									  var cartItems = Ext.getStore('cartItems');
        							  cartItems.removeAll();
        							  Constant.total = 0;
        							  Constant.badgeText = 0;
								}
							}
	                    },
	                    {
	                        text: 'Reset Form',
	                        align: 'left',
	                        handler: function(){
	                            Ext.getCmp('deliveryDetailsForm').reset();
	                        }	
	                    }
                ]
            }
        ],
        listeners:{
			 show: function( e, eOpts ){
				console.log('show called');
				// -------- Performance Optimization ---------
				Constant.uiComponents.checkoutTotalAmount.setTitle('Total Amount : '+ Constant.total+ ' $');
			 }
		}
    }
});
