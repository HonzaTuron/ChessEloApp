/*
 * File: app/view/forms/AddGameDialog.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Enif.view.forms.AddGameDialog', {
    extend: 'Ext.Dialog',
    alias: 'widget.forms.addgamedialog',

    requires: [
        'Enif.view.forms.AddGameDialogViewModel',
        'Enif.view.forms.AddGameForm',
        'Ext.form.Panel',
        'Ext.Tool'
    ],

    viewModel: {
        type: 'forms.addgamedialog'
    },
    buttonAlign: 'right',
    buttons: {
        ok: {
            text: 'Add new game',
            ui: 'confirm',
            handler: function(){
                    // There should be probably better getter
                    Ext.first('#addForm').getController().addNewGame();        
                }
        },
        close: {
            text: 'Cancel',
            ui: 'cancel',
            handler: function() {
                    this.up('dialog').destroy();
                }
        }
    },
    title: 'Add new match',
    titleAlign: 'center',
    dismissAction: 'close',

    items: [
        {
            xtype: 'forms.addgameform'
        }
    ],
    tools: [
        {
            xtype: 'tool',
            handler: function(owner, tool, event) {
                this.up('dialog').destroy();
            },
            type: 'close'
        }
    ]

});