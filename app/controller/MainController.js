Ext.define('ShoppingApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    config: {
        control: {
            'list[itemId="allItems"]': {
                itemtap: 'itemAdding'
            },
            'list[itemId="exclusiveItems"]': {
                itemtap: 'itemAdding'
            },
            'list[itemId="cartList"]': {
                itemtap: 'itemUpdate'
            },
            'button[itemId=removeAllCart]':{
                tap: 'emptyCart'    
            }
        },
        refs: {
            removeAllCartButton: 'button[itemId=removeAllCart]', //using xtype itemId
        }
    },
    itemAdding: function(list, index, target, record, evt) {
        var type = evt.event.target.type || '';
        if(type == 'button') {
            var num = evt.event.target.previousElementSibling;
            if(num.value<1){
                Ext.Msg.alert('Add Item','Please set the quantity !!');
            }else{
                // Getting Store Referenece
                var cartItems = Ext.getStore('cartItems');
                /* Check if record exist , getIndex*/
                var index = cartItems.find('productType', record.get('productType'));
                /*
                If record found at some index, update the particular record
                else create new record
                */
                if(index >= 0){
                    var record = cartItems.getAt(index);
                    
                    // getting previous qty
                    var  qty = record.get('qty');
                    console.log('previous qty = '+ qty + ' new qty to be added ' + num.value);
                    
                    // adding items to previous qty
                    var newQty = (parseInt(qty) + parseInt(num.value));
                    record.set('qty', newQty);

                    // updating subtaotal in cart store
                    var subtotal = (newQty) * (record.get('price'));
                    record.set('subtotal' , subtotal);

                } else {
                    var subtotal = (num.value * record.get('price'));
                    /* Adding record to cart Items , if doesn't exist*/         
                    cartItems.add({'productType': record.get('productType'), 'imageUrl':record.get('imageUrl') , 'price': record.get('price'), 'qty': num.value, 'subtotal': (num.value*record.get('price'))});
                }
                console.log('1');
                // Updating badge count
                Constant.num += parseInt(num.value);
                Constant.total += subtotal;

                // Updating Badge Text of tab-Panel
                var tab = Ext.getCmp('ext-tabbar-1').down('.tab[title=Cart]');
                tab.setBadgeText(Constant.num);

                // Updating Total Amount
                var item = Ext.ComponentQuery.query('#totalAmount');
                console.log(item[0].getTitle());
                item[0].setTitle('Total Amount : '+ Constant.total + '$');
            }           
        }
    },
    itemUpdate: function(list, index, target, record, evt) {
        var type = evt.event.target.type || '';
        if(type == 'button') {
            var num = evt.event.target.previousElementSibling;
            // getting previous qty
            var prvQty = parseInt(record.get('qty'));
            // replacing with new qty
            record.set('qty', num.value);
            // getting previos subtotal
            var  prvSubtotal = record.get('subtotal');

            // updating subtotal in cart store
            var subtotal = ( num.value ) * (record.get('price'));
            record.set('subtotal' , subtotal);

            // Updating total
            Constant.total += (subtotal - prvSubtotal);

            // Updating badge count
            Constant.num += (parseInt(num.value) - prvQty);

            // Updating Badge Text of tab-Panel
            var tab = Ext.getCmp('ext-tabbar-1').down('.tab[title=Cart]');
            tab.setBadgeText(Constant.num);

            // Updating Total Amount
            var item = Ext.ComponentQuery.query('#totalAmount');
            console.log(item[0].getTitle());
            item[0].setTitle('Total Amount : '+ Constant.total + '$');
        }
    },
    emptyCart: function(){
        console.log('emptty cart');
        var cartItems = Ext.getStore('cartItems');
        cartItems.removeAll();
    }
});