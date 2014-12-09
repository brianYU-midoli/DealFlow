Ext.define('GeoCon.view.taskassign.MyTaskPanel', {
    extend: 'Ext.Panel',
    requires: [
        'GeoCon.view.taskassign.MyTaskList',
        'GeoCon.view.taskassign.MyTaskMainPanel'
    ],
    config: {
        layout: 'fit',
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'My Task'
        }, {
            docked: 'top',
            xtype: 'toolbar',
            ui: 'light',
            items: [{
                id: 'btn_MyTaskRefresh',
                iconCls: 'refresh',
                iconMask: true
            }, {
                width: 180,
                id: 'btn_MyTaskSearch',
                xtype: 'searchfield',
                placeHolder: 'Search...'
            }, {
                text: 'Brief',
                id: 'btn_MyTaskDetail'
            }, {
                text: 'Activities & Comments',
                id: 'btn_MyTaskHistory'
            }, {
                xtype: 'spacer'
//            }, {
//                //xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyTaskActivities',
//                text: 'Activities',
//                iconCls: 'compose',
//                hidden: true
            }, {
                //xtype: 'button',
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyTaskEdit',
                text: 'Edit',
                iconCls: 'compose'
           
            }, {
                //xtype: 'button',
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyTaskComments',
                text: 'Comments',
                iconCls: 'compose',
                hidden: true
            }]
        }, {
            //docked: 'left',
            //width: 250,
            
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
                    id: 'cbo_MyTaskUserSelect',
                    store: 'OwnerListStore',
                    displayField: 'Name',
                    valueField: 'ID'
                },{
                    width: 110,
                    id:'cbo_MyTaskStatusSelect',
                    xtype: 'selectfield',
                    store: 'TaskSelectStore',
                    displayField: 'Name',
                    valueField: 'ID'
                }]
            },{
               id: 'mytasklist',
               xclass: 'GeoCon.view.taskassign.MyTaskList'
            }]
        }, {
            docked: 'left',
             width: 774,
            id: 'mytaskmainpanel',
            xclass: 'GeoCon.view.taskassign.MyTaskMainPanel',
        }]
    }
});