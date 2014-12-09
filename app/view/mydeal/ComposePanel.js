Ext.define('GeoCon.view.mydeal.ComposePanel', {
    extend: 'Ext.form.FormPanel',
    //xtype: 'composepanel',
    config: {
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'fieldset',
            //title: 'Personal Info',
            //instructions: 'Please enter the information above.',
            defaults: {
                labelWidth: '15%'
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'Compose'
            }, {
                xtype: 'hiddenfield',
                id: "Compose_BasicInfo_ID",
                name: 'BasicInfo_ID',
                value: "null"
            }, {
                xtype: 'hiddenfield',
                id: "Name",
                name: 'Name'
            }, {
                xtype: 'textareafield',
                id: 'Comments',
                name: 'ComposeText',
                label: 'Comments'
            }]
        }, {
            xtype: 'panel',
            defaults: {
                xtype: 'button',
                style: 'margin: 0.1em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [{
                id: 'btn_MyDealQuickReply',
                text: 'Quick Reply'
            }, {
                id: 'btn_MyDealCommentsSubmit',
                text: 'Submit'
            }]
        }]
    }
});