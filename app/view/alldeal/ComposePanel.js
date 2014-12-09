Ext.define('GeoCon.view.alldeal.ComposePanel', {
    extend: 'Ext.form.FormPanel',
    xtype: 'allcomposepanel',
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
                id: "AllCompose_BasicInfo_ID",
                name: 'BasicInfo_ID',
                value: "null"
            }, {
                xtype: 'hiddenfield',
                id: "AllName",
                name: 'Name'
            }, {
                xtype: 'textareafield',
                id: 'AllComments',
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
                id: 'btn_AllDealQuickReply',
                text: 'Quick Reply'
            }, {
                id: 'btn_AllDealCommentsSubmit',
                text: 'Submit'
            }]
        }]
    }
});