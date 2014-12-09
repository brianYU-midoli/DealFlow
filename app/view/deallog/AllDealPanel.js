Ext.define('GeoCon.view.deallog.AllDealPanel', {
    extend: 'Ext.Panel',
    requires: [
        'GeoCon.view.alldeal.MainPanel'
    ],
    config: {
        layout: 'fit',
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'All Deal Log'//,
            //            items: [{
            //                ui: 'back',
            //                text: 'Home'
            //            }]
        }, {
            docked: 'top',
            xtype: 'toolbar',
            ui: 'light',
            id: 'ToolBar_1',
            items: [{
                //id: 'fileBtn',
                //xtype: 'fileupload',
                //iconCls: 'download',
                //iconMask: true,
                //ui: 'confirm',
                //text: 'File dialog',
                //padding: 20,
                //actionUrl: 'http://DealLogWS.demo.com/FileUpLoad.aspx',//'getfile.php',
                //returnBase64Data: true

                // For success and failure callbacks setup look into controller
            //},{
                id: 'btn_AllDealReset',
                xtype: 'button',
                iconMask: true,
                iconAlign: 'right',
                text: 'Reset'
            }, {
                xtype: 'selectfield',
                width: 150,
                id: 'Status_Name',
                name: 'Status_Name',
                store: 'StatusCodeValueStore',
                displayField: 'Name',
                valueField: 'Value'
//                options: [{
//                    text: 'Status', value: ''
//                }, {
//                    text: 'Screening', value: 'Screening'
//                }, {
//                    text: 'DD', value: 'DD'
//                }, {
//                    text: 'Approved', value: 'Approved'
//                }, {
//                    text: 'Completed', value: 'Completed'
//                }, {
//                    text: 'Pending', value: 'Pending'
//                }, {
//                    text: 'Drop', value: 'Drop'
//                }, {
//                    text: 'CRI-Screening', value: 'CRI-Screening'
//                }, {
//                    text: 'CRI-Drop', value: 'CRI-Drop'
//                }]
            }, {
                xtype: 'selectfield',
                id: 'Area_Name',
                name: 'Area_Name',
                width: 100,
                store: 'RegionCodeValueStore',
                displayField: 'Name',
                valueField: 'Value'
//                options: [{
//                    text: 'Region', value: ''
//                }, {
//                    text: 'TW', value: 'TW'
//                }, {
//                    text: 'CN', value: 'CN'
//                }, {
//                    text: 'HK', value: 'HK'
//                }, {
//                    text: 'US', value: 'US'
//                }, {
//                    text: 'VN', value: 'VN'
//                }, {
//                    text: 'KR', value: 'KR'
//                }, {
//                    text: 'Other', value: 'Other'
//                }]
            }, {
                xtype: 'selectfield',
                id: 'AO',
                name: 'AO',
                width: 125,
                store: 'AOCodeValueStore',
                displayField: 'Name',
                valueField: 'Value'
            }, {
                xtype: 'selectfield',
                id: 'Industry',
                name: 'Industry',
                width: 310,
                styleHtmlCls: 'AAA',
                store: 'IndustryCodeValueStore',
                displayField: 'Name',
                valueField: 'Value'
                //                options: [{
                //                    "ID": 0,
                //                    "text": " Industry",
                //                    "value": ""
                //                }, {
                //                    "ID": 7,
                //                    "text": "Automobile",
                //                    "value": "Automobile"
                //                }, {
                //                    "ID": 12,
                //                    "text": "BPO Services",
                //                    "value": "BPO Services"
                //                }, {
                //                    "ID": 6,
                //                    "text": "Consumer - Products",
                //                    "value": "Consumer - Products"
                //                }, {
                //                    "ID": 15,
                //                    "text": "Consumer - Retails",
                //                    "value": "Consumer - Retails"
                //                }, {
                //                    "ID": 9,
                //                    "text": "Consumer - Services",
                //                    "value": "Consumer - Services"
                //                }, {
                //                    "ID": 10,
                //                    "text": "Culture / Media",
                //                    "value": "Culture / Media"
                //                }, {
                //                    "ID": 11,
                //                    "text": "Education",
                //                    "value": "Education"
                //                }, {
                //                    "ID": 4,
                //                    "text": "Environmental / Green Technology",
                //                    "value": "Environmental / Green Technology"
                //                }, {
                //                    "ID": 3,
                //                    "text": "Health Care - Products",
                //                    "value": "Health Care - Products"
                //                }, {
                //                    "ID": 13,
                //                    "text": "Health Care - Services",
                //                    "value": "Health Care - Services"
                //                }, {
                //                    "ID": 2,
                //                    "text": "I.T.",
                //                    "value": "I.T."
                //                }, {
                //                    "ID": 14,
                //                    "text": "Internet Service",
                //                    "value": "Internet Service"
                //                }, {
                //                    "ID": 16,
                //                    "text": "Macro Economy",
                //                    "value": "Macro Economy"
                //                }, {
                //                    "ID": 1,
                //                    "text": "Modern Agriculture",
                //                    "value": "Modern Agriculture"
                //                }, {
                //                    "ID": 18,
                //                    "text": "N/A",
                //                    "value": "N/A"
                //                }, {
                //                    "ID": 5,
                //                    "text": "New Materials",
                //                    "value": "New Materials"
                //                }, {
                //                    "ID": 8,
                //                    "text": "Others",
                //                    "value": "Others"
                //                }, {
                //                    "ID": 17,
                //                    "text": "VC&PE",
                //                    "value": "VC&PE"
                //                }]
                //                options: [{
                //                    text: 'Industry', value: ''
                //                }, {
                //                    text: 'I.T.', value: 'I.T.'
                //                }, {
                //                    text: 'JP', value: 'JP'
                //                }]
                //                store: 'IndustryCodeValueStore',
                //                displayField: 'Name',
                //                valueFiel: 'Value'

            }, {
                xtype: 'spacer'
            }, {
                id: 'btn_AllDealRefresh',
                xtype: 'button',
                iconCls: 'refresh',
                iconMask: true,
                iconAlign: 'right'
            }, {
                width: 150,
                id: 'search',
                xtype: 'searchfield',
                placeHolder: 'Search...'
            }]
        }, {
            docked: 'top',
            xtype: 'toolbar',
            ui: 'light',
            id: 'ToolBar_2',
            hidden: true,
            items: [{
                xtype: 'button',
                ui: 'back',
                text: 'Back',
                iconMask: true,
                iconAlign: 'right',
                handler: function () {
                    Ext.getCmp('allmainpanel').setActiveItem(0);
                    Ext.getCmp('ToolBar_1').setHidden(false);
                    Ext.getCmp('ToolBar_2').setHidden(true);
                }
            }, {
                xtype: 'button',
                text: 'Brief',
                id: 'btn_AllDetail',
                handler: function () {
                    Ext.getCmp('allmainpanel').setActiveItem(1);
                    //Ext.getCmp('btn_AllComments').hide();
                    //btn_AllDetail btn_AllHistory 變色
                    Ext.getCmp('btn_AllDetail').setUi('confirm');
                    Ext.getCmp('btn_AllHistory').setUi('normal');

                }
            }, {
                xtype: 'button',
                text: 'Activities & Comments',
                id: 'btn_AllHistory',
                handler: function () {
                    Ext.getCmp('allmainpanel').setActiveItem(2);
                    //Ext.getCmp('btn_AllComments').show();
                    //btn_AllDetail btn_AllHistory 變色
                    Ext.getCmp('btn_AllHistory').setUi('confirm');
                    Ext.getCmp('btn_AllDetail').setUi('normal');
                }
            }, {
                xtype: 'spacer'
            }, {
                //hidden: true,
                id: 'btn_AllComments',
                xtype: 'button',
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                text: 'Comments',
                iconCls: 'compose',
                handler: function () {
                    Ext.getCmp('allmainpanel').setActiveItem(3);
                    //btn_AllDetail btn_AllHistory 變色
                    Ext.getCmp('btn_AllHistory').setUi('confirm');
                    Ext.getCmp('btn_AllDetail').setUi('normal');
                }
            }]
        }, {
            docked: 'left',
            width:'100%',
            id: 'allmainpanel',
            xclass: 'GeoCon.view.alldeal.MainPanel'
        }]
    }
});