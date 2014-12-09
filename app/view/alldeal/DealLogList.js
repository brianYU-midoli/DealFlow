Ext.define('GeoCon.view.alldeal.DealLogList', {
    extend: 'Ext.List',
    config: {
        disableSelection: true,
        plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],
        store: 'AllDealStore',
        grouped: true,
        //itemTpl: '<table width="100%"><tr><td style="width:15%;">{Name}</td><td style="width:10%;color:dodgerblue;">{Status_Name}</td><td style="width:40%;">{Description}</td><td style="width:5%;">{Area_Name}</td><td style="width:9%;color:gray;">{AO}</td><td style="width:9%;">{Industry}</td><td style="width:10%;color:dodgerblue;">{Str_Modify_Date}</td></tr></table>',
        itemTpl: '<table width="95%"><tr><td style="width:10%;">{BasicInfo_ID}</td><td style="width:15%;">{Name}</td><td style="width:10%;color:dodgerblue;">{Status_Name}</td><td style="width:35%;">{Description}</td><td style="width:5%;">{Area_Name}</td><td style="width:10%;color:gray;">{AO}</td><td style="width:15%;">{Industry}</td></tr></table>',
        //emptyText: '<div style="width:100%;text-align:center;font-size:22px">No Data!</div>',
        onItemDisclosure: function (_Record, btn, index) {
            F_BasicInfo_ID = _Record.get('BasicInfo_ID');
            F_AO = _Record.get('AO');
            var IsSecret = _Record.get('IsSecret');
            if (IsSecret != 'Y') {
                Ext.getCmp('allmainpanel').setActiveItem(1);
                Ext.getCmp('ToolBar_1').setHidden(true);
                Ext.getCmp('ToolBar_2').setHidden(false);
                //更新Detail
                var _Panel_1 = Ext.getCmp('alldetailpanel');
                _Panel_1.setRecord(_Record);
                TitleUrl = _Record.get('Website');
                //更新Commemts
                var Commemts_Store = Ext.getCmp('allhistorypanel').getStore();
                Commemts_Store.getProxy().config.extraParams.actiontype = 'History';
                Commemts_Store.getProxy().config.extraParams.BasicInfo_ID = F_BasicInfo_ID;
                Commemts_Store.getProxy().config.extraParams.AO = F_AO;
                //Commemts_Store.load();
                Commemts_Store.loadPage(1);
                Ext.getCmp('AllCompose_BasicInfo_ID').setValue(F_BasicInfo_ID);
                Ext.getCmp('allcomposepanel').reset();
                //btn_AllDetail btn_AllHistory 變色
                Ext.getCmp('btn_AllDetail').setUi('confirm');
                Ext.getCmp('btn_AllHistory').setUi('normal');
            } else {

                //檢查權限
                Ext.Ajax.request({
                    url: WS_Url,
                    method: 'Post',
                    params: {
                        actiontype: 'Participant',
                        BasicInfo_ID: F_BasicInfo_ID,
                        callback: 'callback',
                        Name: Name
                    },
                    success: function (response, action) {

                        var result = Ext.decode(response.responseText);
                        if (result.Participant == 'Y') {
                            Ext.getCmp('allmainpanel').setActiveItem(1);
                            Ext.getCmp('ToolBar_1').setHidden(true);
                            Ext.getCmp('ToolBar_2').setHidden(false);
                            //更新Detail
                            var _Panel_1 = Ext.getCmp('alldetailpanel');
                            _Panel_1.setRecord(_Record);
                            TitleUrl = _Record.get('Website');
                            //更新Commemts
                            var Commemts_Store = Ext.getCmp('allhistorypanel').getStore();
                            Commemts_Store.getProxy().config.extraParams.actiontype = 'History';
                            Commemts_Store.getProxy().config.extraParams.BasicInfo_ID = F_BasicInfo_ID;
                            Commemts_Store.getProxy().config.extraParams.AO = F_AO;
                            //Commemts_Store.load();
                            Commemts_Store.loadPage(1);
                            Ext.getCmp('AllCompose_BasicInfo_ID').setValue(F_BasicInfo_ID);
                            Ext.getCmp('allcomposepanel').reset();
                            //btn_AllDetail btn_AllHistory 變色
                            Ext.getCmp('btn_AllDetail').setUi('confirm');
                            Ext.getCmp('btn_AllHistory').setUi('normal');
                        }
                        else {
                            Ext.Msg.alert('禁止讀取', '保密中', Ext.emptyFn)
                        }
                    }
                });

            }
        }
    }
});