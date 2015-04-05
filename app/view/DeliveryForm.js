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
                        // value: 'user adam'
                     },
                     {
                         xtype: 'emailfield',
                         name: 'email',
                         required: true,
                         label: 'Email',
                         labelWrap: true,
                        // value: 'user@gmail.com'                                   
                     },
                     {
                         xtype: 'textfield',
                         name: 'mobile',
                         required: true,
                         label: 'Mobile No',
                         labelWrap: true,
                        // value: '7795215218'                                   
                     },
                     {
                         xtype: 'textareafield',
                         name: 'address',
                         required: true,
                         label: 'Address',
                         labelWrap: true,
                        // value: ' A-24 rij Vihar'                                   
                     }
                 ]
            },
        ]
    }
});