Ext.define('ShoppingApp.view.DeliveryForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.DeliveryForm',
    xtype: 'deliveryform',
 
    config: {
        itemId: 'registrationform',
        items: [
            
            {
                 xtype: 'fieldset',
                 id: 'deliveryFieldset',
                 title: 'Delivery Details',
                 items:[
                     {
                         xtype: 'textfield',
                         name: 'fullname',
                         required: true,
                         label: 'Full Name',
                         labelWrap: true,
                         placeHolder: 'Full Name',
                        // value: 'user adam'
                     },
                     {
                         xtype: 'emailfield',
                         name: 'email',
                         required: true,
                         placeHolder: 'Email (user@gmail.com)',
                         label: 'Email',
                         labelWrap: true,
                        // value: 'user@gmail.com'                                   
                     },
                     {
                         xtype: 'textfield',
                         name: 'mobile',
                         required: true,
                         placeHolder: 'Mobile No (+91-7795215218)',
                         label: 'Mobile No',
                         labelWrap: true,
                        // value: '7795215218'                                   
                     },
                     {
                         xtype: 'textareafield',
                         name: 'address',
                         required: true,
                         placeHolder: 'Delivery Address',
                         label: 'Address',
                         labelWrap: true,
                        // value: ' A-24 rij Vihar'                                   
                     }
                 ]
            },
        ]
    }
});