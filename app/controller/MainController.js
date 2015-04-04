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
            },
            'button[itemId=ProceedPay]':{
                tap: 'proceedToPay'    
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
                var cartItems = Constant.store.cartItems;
               
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

                // Updating badge count
                Constant.badgeText += parseInt(num.value);
                Constant.total += subtotal;

                // Updating Badge Text of tab-Panel               
                var tab = Constant.uiComponents.cartTab;
                tab.setBadgeText(Constant.badgeText);

                // Updating Total Amount
                var totalAmountCmp = Constant.uiComponents.totalAmount;
                totalAmountCmp[0].setTitle('Total Amount : '+ Constant.total + '$');

                // After adding to cart set back the value to 0
                num.value = 0;


                /*var a = performance.now();
                var b = performance.now();
                console.log('It took ' + (b - a) + ' ms.');*/
            }           
        }
    },
    itemUpdate: function(list, index, target, record, evt) {
        var type = evt.event.target.type || '';
        var id = evt.event.target.id || '';
        if(type == 'button' && id=='update') {
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
            Constant.badgeText += (parseInt(num.value) - prvQty);

            // Updating Badge Text of tab-Panel
            var tab = Constant.uiComponents.cartTab;
            tab.setBadgeText(Constant.badgeText);

            // Updating Total Amount
            var totalAmountCmp = Constant.uiComponents.totalAmount;
            totalAmountCmp[0].setTitle('Total Amount : '+ Constant.total + '$');
        }
        else if(type == 'button' && id=='remove') {
            console.log('remove this item');
            // getting previous qty
            var prvQty = parseInt(record.get('qty'));

            // getting previos subtotal
            var  prvSubtotal = record.get('subtotal');

            // Updating total
            Constant.total = (Constant.total - prvSubtotal);

            // Updating badge count
            Constant.badgeText = (Constant.badgeText - prvQty);

             // Updating Badge Text of tab-Panel
            var tab = Constant.uiComponents.cartTab;
            tab.setBadgeText(Constant.badgeText);

            // Updating Total Amount
            var totalAmountCmp = Constant.uiComponents.totalAmount;
            totalAmountCmp[0].setTitle('Total Amount : '+ Constant.total + '$');

            // Getting Store Referenece
            var cartItems = Constant.store.cartItems;
            cartItems.remove(record);
        }
    },
    emptyCart: function(){
        console.log('empty cart');
        var cartItems = Ext.getStore('cartItems');
        cartItems.removeAll();

        // Updating Badge Text of tab-Panel
        Constant.badgeText = 0;
        var tab = Constant.uiComponents.cartTab;
        tab.setBadgeText(Constant.badgeText);

        // Updating Total Amount
        Constant.total = 0;
        var totalAmountCmp = Constant.uiComponents.totalAmount;
        totalAmountCmp[0].setTitle('Total Amount : '+ Constant.total + '$');
    },
    proceedToPay: function(){
        console.log('proceedToPay');
        var viewItems = Ext.Viewport.getItems();
        //viewItems.items[viewItems.items.length -1].show();
        Ext.Viewport.setActiveItem('completeorder');
    }
});