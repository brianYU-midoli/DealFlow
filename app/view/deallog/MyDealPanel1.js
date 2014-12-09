Ext.define('GeoCon.view.deallog.MyDealPanel', {
    extend: 'Ext.Panel',
    requires: [
        'GeoCon.view.mydeal.DealLogList',
        'GeoCon.view.mydeal.MainPanel'
    ],
    config: {
        //layout: 'fit',
        layout: 'hbox',
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'My Deal Log'//,
            //            items: [{
            //                ui: 'back',
            //                text: 'Home'
            //            }]
        }, {
            docked: 'top',
            xtype: 'panel',
            layout: 'hbox',
            items: [{
                xtype: 'panel',
                flex: 1,
                items: [{
                    docked: 'top',
                    xtype: 'toolbar',
                    ui: 'light',
                    items: [{
                        id: 'btn_MyDealRefresh',
                        iconCls: 'refresh',
                        iconMask: true
                    }, {
                        //width: 180,
                        id: 'btn_MyDealSearch',
                        xtype: 'searchfield',
                        placeHolder: 'Search...'
                    }]
                }]
            }, {
                xtype: 'panel',
                flex: 3,
                items: [{
                    docked: 'top',
                    xtype: 'toolbar',
                    ui: 'light',
                    items: [{
                        text: 'Brief',
                        id: 'btn_MyDealDetail'
                    }, {
                        text: 'Activities & Comments',
                        id: 'btn_MyDealHistory'
                    }, {
                        xtype: 'spacer'
                    }, {
                        xtype: 'button',
                        iconMask: true,
                        iconAlign: 'right',
                        ui: 'plain',
                        id: 'btn_MyDealActivities',
                        text: 'Activities',
                        iconCls: 'compose',
                        hidden: true
                    }, {
                        xtype: 'button',
                        iconMask: true,
                        iconAlign: 'right',
                        ui: 'plain',
                        id: 'btn_MyDealEdit',
                        text: 'Edit',
                        iconCls: 'compose'

                    }, {
                        xtype: 'button',
                        iconMask: true,
                        iconAlign: 'right',
                        ui: 'plain',
                        id: 'btn_MyDealComments',
                        text: 'Comments',
                        iconCls: 'compose',
                        hidden: true
                    }]
                }, {
                    dock: 'bottom',
                    //width: '25%',
                    id: 'MyDealLogList',
                    xclass: 'GeoCon.view.mydeal.DealLogList'
                }]

                //            }, {
                //               //docked: 'left',
                //                width: '75%',
                //                id: 'mainpanel',
                //                xclass: 'GeoCon.view.mydeal.MainPanel'
            }]
        }]
    }
});

// docked:'top',
//         xtype: 'panel',
//         items:[{
//            docked: 'left',
//            width:'25%',
//            xtype: 'toolbar',
//            ui: 'light',
//            items: [{
//              id: 'btn_MyDealRefresh',
//                iconCls: 'refresh',
//                iconMask: true
//            }, {
//                width: 180,
//                id: 'btn_MyDealSearch',
//                xtype: 'searchfield',
//                placeHolder: 'Search...'
//            }]
//         },{
//            docked: 'left',
//            width:'75%',
//            xtype: 'toolbar',
//            ui: 'light',
//            items: [{
//                text: 'Brief',
//                id: 'btn_MyDealDetail'
//            }, {
//                text: 'Activities & Comments',
//                id: 'btn_MyDealHistory'
//            }, {
//                xtype: 'spacer'
//            }, {
//                xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyDealActivities',
//                text: 'Activities',
//                iconCls: 'compose',
//                hidden: true
//            }, {
//                xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyDealEdit',
//                text: 'Edit',
//                iconCls: 'compose'
//           
//            }, {
//                xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyDealComments',
//                text: 'Comments',
//                iconCls: 'compose',
//                hidden: true
//            }]
//         }]


//  docked: 'top',
//            xtype: 'toolbar',
//            ui: 'light',
//            items: [{
//                id: 'btn_MyDealRefresh',
//                iconCls: 'refresh',
//                iconMask: true
//            }, {
//                width: 180,
//                id: 'btn_MyDealSearch',
//                xtype: 'searchfield',
//                placeHolder: 'Search...'
//            }, {
//                text: 'Brief',
//                id: 'btn_MyDealDetail'
//            }, {
//                text: 'Activities & Comments',
//                id: 'btn_MyDealHistory'
//            }, {
//                xtype: 'spacer'
//            }, {
//                //xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyDealActivities',
//                text: 'Activities',
//                iconCls: 'compose',
//                hidden: true
//            }, {
//                //xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyDealEdit',
//                text: 'Edit',
//                iconCls: 'compose'
//           
//            }, {
//                //xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyDealComments',
//                text: 'Comments',
//                iconCls: 'compose',
//                hidden: true
//            }]

//        }, {
//            docked: 'left',
//            width: '25%',
//            id: 'MyDealLogList',
//            xclass: 'GeoCon.view.mydeal.DealLogList'
//        }, {
//            docked: 'left',
//            width: '75%',
//            id: 'mainpanel',
//            xclass: 'GeoCon.view.mydeal.MainPanel',
//        }]

// docked: 'top',
//            xtype: 'toolbar',
//            ui: 'light',
//            items: [{
//                id: 'btn_MyDealRefresh',
//                iconCls: 'refresh',
//                iconMask: true
//            }, {
//                width: 180,
//                id: 'btn_MyDealSearch',
//                xtype: 'searchfield',
//                placeHolder: 'Search...'
//            }, {
//                text: 'Brief',
//                id: 'btn_MyDealDetail'
//            }, {
//                text: 'Activities & Comments',
//                id: 'btn_MyDealHistory'
//            }, {
//                xtype: 'spacer'
//            }, {
//                //xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyDealActivities',
//                text: 'Activities',
//                iconCls: 'compose',
//                hidden: true
//            }, {
//                //xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyDealEdit',
//                text: 'Edit',
//                iconCls: 'compose'
//           
//            }, {
//                //xtype: 'button',
//                iconMask: true,
//                iconAlign: 'right',
//                ui: 'plain',
//                id: 'btn_MyDealComments',
//                text: 'Comments',
//                iconCls: 'compose',
//                hidden: true
//            }]
//        }, {
//            docked: 'left',
//            width: '25%',
//            id: 'MyDealLogList',
//            xclass: 'GeoCon.view.mydeal.DealLogList'
//        }, {
//            docked: 'left',
//            width: '75%',
//            id: 'mainpanel',
//            xclass: 'GeoCon.view.mydeal.MainPanel',