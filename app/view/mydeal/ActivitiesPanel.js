Ext.define('GeoCon.view.mydeal.ActivitiesPanel', {
    extend: 'Ext.form.FormPanel',
    xtype: 'activitiespanel',
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
                value: 'Activities'
            }, {
                xtype: 'hiddenfield',
                id: "Activities_BasicInfo_ID",
                name: 'BasicInfo_ID',
                value: "null"
            }, {
                xtype: 'textareafield',
                id: 'Activities',
                name: 'ComposeText',
                label: 'Activities'
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
                id: 'btn_MyDealActivitiesSubmit',
                text: 'Submit'
            }]
        }]
    }
});