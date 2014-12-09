Ext.define('GeoCon.view.taskassign.MyTaskComposePanel', {
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
                value: 'AddCommand'
            }, {
                xtype: 'hiddenfield',
                id: "CommandTaskID",
                name: 'TaskID',
                value: "null"
            }, {
                xtype: 'hiddenfield',
                name: 'CommandType',
                value: "1"
            }, {
                xtype: 'hiddenfield',
                id: "CommandUser",
                name: 'Name'
            }, {
                xtype: 'textareafield',
                id: 'MyTaskComments',
                name: 'ComposeText',
                label: 'Comments'
            }, {
                xtype: 'button',
                id: 'btn_MyTaskCommentsSubmit',
                text: 'Submit'
            }]
        }]
    }
});