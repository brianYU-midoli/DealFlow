Ext.define('GeoCon.view.taskassign.MyAssignToPanel', {
    extend: 'Ext.Panel',
    requires: [
        'GeoCon.view.taskassign.MyAssignToList',
        'GeoCon.view.taskassign.MyAssignToMainPanel'
    ],
    config: {
        layout: 'fit',
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'My Assignment'
        }, {
            docked: 'top',
            xtype: 'toolbar',
            ui: 'light',
            items: [{
                id: 'btn_MyAssignToRefresh',
                iconCls: 'refresh',
                iconMask: true
            }, {
                width: 180,
                id: 'btn_MyAssignToSearch',
                xtype: 'searchfield',
                placeHolder: 'Search...'
            }, {
                text: 'Brief',
                id: 'btn_MyAssignToDetail'
            }, {
                text: 'Activities & Comments',
                id: 'btn_MyAssignToHistory'
            }, {
                xtype: 'spacer'
            }, {
                //xtype: 'button',
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyAssignToActivities',
                text: 'Activities',
                iconCls: 'compose',
                hidden: true
            }, {
                //xtype: 'button',
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyAssignToNew',
                text: 'New',
                iconCls: 'add'
            }, {
                //xtype: 'button',
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyAssignToEdit',
                text: 'Edit',
                iconCls: 'compose'
            }, {
                //xtype: 'button',
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyAssignToDelete',
                text: 'Delete',
                iconCls: 'delete'
                //            }, {
                //                //xtype: 'button',
                //                iconMask: true,
                //                iconAlign: 'right',
                //                ui: 'plain',
                //                id: 'btn_MyAssignToComments',
                //                text: 'Comments',
                //                iconCls: 'compose',
                //                hidden: true
            }]
        }, {
            docked: 'left',
            width: 250,
            xtype: 'panel',
            defaults: {
                style: 'margin: 0px',
                flex: 1
            },
            layout: {
                type: 'vbox'
            },
            items: [{
                docked: 'top',
                xtype: 'toolbar',
                ui: 'light',
                items: [{
                    width: 100,//35
                    xtype: 'selectfield',
                    id: 'cbo_MyAssignUserSelect',
                    store: 'AssignToListStore',
                    displayField: 'Name',
                    valueField: 'ID'
                }, {
                    width: 110,
                    xtype: 'selectfield',
                    id: 'cbo_MyAssignStatusSelect',
                    store: 'TaskSelectStore',
                    displayField: 'Name',
                    valueField: 'ID'
                }]
            }, {
                id: 'myassigntolist',
                xclass: 'GeoCon.view.taskassign.MyAssignToList'
            }]
        }, {
            docked: 'left',
            width: 774,
            id: 'myassigntomainpanel',
            xclass: 'GeoCon.view.taskassign.MyAssignToMainPanel'
        }]
    }
});