Ext.define('GeoCon.view.taskassign.MyAssignToComposePanel', {
    extend: 'Ext.form.FormPanel',
    //xtype: 'composepanel',
    config: {
        //        layout: {
        //            type: 'vbox',
        //            align: 'stretch'
        //        },
        items: [{
            //            xtype: 'fieldset',
            //            title: 'ActivitiesType',
            //            defaults: {
            //                xtype: 'radiofield',
            //                labelWidth: '15%',
            //                name: 'ActivityType'
            //            },
            //            items: [{
            //                label: '留言',
            //                value: 'Comments',
            //                checked: true
            //            }, {
            //                label: '退回',
            //                value: 'Return'
            //            }, {
            //                label: '結案',
            //                value: 'Close'
            //            }]
            //        }, {
            xtype: 'fieldset',
            defaults: {
                labelWidth: '15%'
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'AddCommand'
            }, {
                xtype: 'hiddenfield',
                id: "ActivitiesTaskID",
                name: 'TaskID',
                value: "null"
            }, {
                xtype: 'hiddenfield',
                name: 'CommandType',
                value: "1"
            }, {
                xtype: 'hiddenfield',
                id: "ActivitiesUser",
                name: 'Name'
            }, {
                xtype: 'textareafield',
                id: 'MyAssignToActivities',
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
                text: 'Reset',
                handler: function () {
                    Ext.getCmp('assigntocomposepanel').reset();
                }
            }, {
                id: 'btn_MyAssignToActivitiesSubmit',
                text: 'Submit'
            }]
        }]
    }
});