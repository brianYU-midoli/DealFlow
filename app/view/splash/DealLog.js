Ext.define('GeoCon.view.splash.DealLog', {
    extend: 'Ext.tab.Panel',
    id: 'deallog',
    requires: [
        'GeoCon.view.deallog.AllDealPanel',
        'GeoCon.view.deallog.HelperPanel',
        'GeoCon.view.deallog.MyDealPanel'
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
        items: [{
            title: 'All Deal',
            iconCls: 'home',            
            xclass: 'GeoCon.view.deallog.AllDealPanel'
        }, {
            title: 'My Deal',
            iconCls: 'favorites',
            xclass: 'GeoCon.view.deallog.MyDealPanel'
        }, {
            title: 'Help',
            iconCls: 'info',
            xclass: 'GeoCon.view.deallog.HelperPanel'
        }],
        listeners: {
            painted: function (panel) {
                var bar = panel.getTabBar();
                if (!Ext.getCmp('btn_DealLogtoHome')) {
                    bar.insert(3, {
                        iconMask: true,
                        iconAlign: 'right',
                        ui: 'plain',
                        id: 'btn_DealLogtoHome',
                        title: 'Home',
                        iconCls: 'home'
                    });
                }
            }
        }
    }
});
