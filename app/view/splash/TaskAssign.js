Ext.define('GeoCon.view.splash.TaskAssign', {
    extend: 'Ext.tab.Panel',
    id: 'taskassign',
    requires: [
        'GeoCon.view.taskassign.MyTaskPanel',
        'GeoCon.view.taskassign.MyAssignToPanel',
        'GeoCon.view.taskassign.HelperPanel'
    ],
    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        defaults: {
            scrollable: true
        },
        layout: {
            type: 'card',
            animation: {
                //type: 'pop',
                duration: 1
            }
        },  
        items: [{
            title: 'My Task',
            iconCls: 'compose',
            xclass: 'GeoCon.view.taskassign.MyTaskPanel'
        }, {
            title: 'My Assignment',
            iconCls: 'user',
            xclass: 'GeoCon.view.taskassign.MyAssignToPanel'
        }, {
            title: 'Help',
            iconCls: 'info',
            xclass: 'GeoCon.view.taskassign.HelperPanel'
        }],
        listeners: {
            painted: function (panel) {
                var bar = panel.getTabBar();
                if (!Ext.getCmp('btn_TasktoHome')) {
                    bar.insert(3, {
                        iconMask: true,
                        iconAlign: 'right',
                        ui: 'plain',
                        id: 'btn_TasktoHome',
                        title: 'Home',
                        iconCls: 'home'
                    });
                }
            }
        }
    }
});