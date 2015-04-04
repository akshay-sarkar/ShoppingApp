/*
 * File: app/model/MyModel.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ShoppingApp.model.DeliveryDetails',{
     extend: 'Ext.data.Model', 
       config: {
           fields: [
             {
                name: 'fullname'
             },
             {
                name: 'email'
             },
             {
                name: 'mobile'
             },
             {
                name: 'address'
             }
           ],
           validations: [
             {
                type: 'presence',
                field: 'fullname'
             },
             {
                type: 'presence',
                field: 'email'
             },
             {
                type: 'presence',
                field: 'mobile'
             },
             {
                type: 'presence',
                field: 'address'
             },
             {
                type: 'format',
                field: 'fullname',
                matcher: /[A-Za-z]{4,15}/,
                message: 'Username should be alphanumeric'
             },
             {
                type: 'email',
                field: 'email',
                message: 'Email format is invalid'
             },
             {
                type: 'format',
                field: 'mobile',
                matcher: /[0-9]{10,12}/,
                message: 'Email format is invalid'
             },
             {
                type: 'format',
                field: 'address',
                matcher: /[0-9A-Za-z]{4,150}/,
                message: 'Address should be alphanumeric'
             },
           ]
     }
});