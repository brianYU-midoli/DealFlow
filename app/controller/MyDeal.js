Ext.define('GeoCon.controller.MyDeal', {
    extend: 'Ext.app.Controller',

    //requires: ['Ext.util.GeoLocation'],

    config: {
        control: {
            '#MyDealLogList':
            {
                itemtap: 'onMyDealLogListItemTap'
            },
            '#btn_MyDealEditSubmit':
            {
                tap: 'onbtn_MyDealEditSubmitTap'
            },
            '#btn_MyDealRefresh':
            {
                tap: 'onbtn_MyDealRefreshTap'
            },
            '#btn_MyDealSearch':
            {
                keyup: 'onbtn_MyDealSearchKeyUp',
                clearicontap: 'onbtn_MyDealSearchCleariconTap'
            },
            '#btn_MyDealDetail':
            {
                tap: 'onbtn_MyDealDetailTap'
            },
            '#btn_MyDealHistory':
            {
                tap: 'onbtn_MyDealHistoryTap'
            },
            '#btn_MyDealEdit':
            {
                tap: 'onbtn_MyDealEditTap'
            },
            '#btn_MyDealActivities':
            {
                tap: 'onbtn_MyDealActivitiesTap'
            },
            '#btn_MyDealComments':
            {
                tap: 'onbtn_MyDealCommentsTap'
            },
            '#btn_MyDealActivitiesSubmit':
            {
                tap: 'onbtn_MyDealActivitiesSubmitTap'
            },
            '#btn_MyDealQuickReply':
            {
                tap: 'onbtn_MyDealQuickReplyTap'
            },
            '#btn_MyDealCommentsSubmit':
            {
                tap: 'onbtn_MyDealCommentsSubmitTap'
            },
            '#cbo_Status_Name_EditForm':
            {
                change: 'oncbo_Status_Name_EditFormChange'
            }
        }
    },

    //    init: function() {
    //        this.location = Ext.create('Ext.util.GeoLocation', {
    //            autoUpdate: false,
    //            listeners: {
    //                locationupdate: 'onLocationUpdate',
    //                locationerror: 'onLocationError',
    //                scope: this
    //            }
    //        });
    //        this.location.updateLocation();
    //    },
    onMyDealLogListItemTap: function (list, index) {
        //讀取資料
        var _Store = list.getStore();
        var _Record = _Store.getAt(index);
        F_BasicInfo_ID = _Record.get('BasicInfo_ID');
        F_AO = _Record.get('AO');
        //更新Detail

        var _Panel_1 = Ext.getCmp('detailpanel');
        _Panel_1.setRecord(_Record);
        TitleUrl = _Record.get('Website');
        //更新Edit
        var _Panel_2 = Ext.getCmp('editpanel');
        _Panel_2.reset();
        _Panel_2.setRecord(_Record);
        //更新Commemts
        var Commemts_Store = Ext.getCmp('historypanel').getStore();
        Commemts_Store.getProxy().config.extraParams.actiontype = 'History';
        Commemts_Store.getProxy().config.extraParams.BasicInfo_ID = F_BasicInfo_ID;
        Commemts_Store.getProxy().config.extraParams.AO = F_AO;
        //Commemts_Store.load();
        Commemts_Store.loadPage(1);
        Ext.getCmp('Compose_BasicInfo_ID').setValue(F_BasicInfo_ID);
        var _form1 = Ext.getCmp('composepanel');
        _form1.reset();
        Ext.getCmp('Activities_BasicInfo_ID').setValue(F_BasicInfo_ID);
        var _form2 = Ext.getCmp('activitiespanel');
        _form2.reset();
        //切換到Detail     
        Ext.getCmp('mainpanel').setActiveItem(0);
        //btn_Detail btn_History 變色
        Ext.getCmp('btn_MyDealDetail').setUi('confirm');
        Ext.getCmp('btn_MyDealHistory').setUi('normal');

        Ext.getCmp('btn_MyDealActivities').hide();
        Ext.getCmp('btn_MyDealComments').hide();
        //權限處理"Moderator -> Edit & Activies"
        Group = _Record.get('Group');
        if (_Record.get('Group') == 'Moderator') {
            Ext.getCmp('btn_MyDealEdit').show();
            Ext.getCmp('btn_MyDealActivities').show();            
        } else {
            Ext.getCmp('btn_MyDealEdit').hide();
            Ext.getCmp('btn_MyDealActivities').hide();            
        }
    },
    onbtn_MyDealEditSubmitTap: function () {
        if (Ext.getCmp('editpanel')) {
            Ext.getCmp('Modify_by').setValue(Name);
            var _form = Ext.getCmp('editpanel');
            _form.submit({
                url: WS_Url,
                method: 'Post',
                params: Ext.urlEncode(_form.getValues(true)),
                success: function () {
                    //更新AllDealLog
                    Ext.getStore('AllDealStore').load();
                    Ext.getStore('MyDealStore').load();
                    //var _index = Ext.getStore('MyDealLogStore').find('BasicInfo_ID', '09-0001');
                    //var _Record = Ext.getStore('MyDealLogStore').getAt(_index);
                    //Ext.getCmp('detailpanel').setRecord(_Record);
                    //                                //清空Compose
                    //                                _form.reset();
                    //                                //更新Commemts
                    //                                var Commemts_Store = Ext.getCmp('commentspanel').getStore();
                    //                                Commemts_Store.getProxy().extraParams.actiontype = 'Comments';
                    //                                Commemts_Store.getProxy().extraParams.BasicInfo_ID = F_BasicInfo_ID;
                    //                                Commemts_Store.getProxy().extraParams.AO = F_AO;
                    //                                Commemts_Store.read();
                    //切換到Commemts                             
                    Ext.getCmp('mainpanel').setActiveItem(0);

                },
                failure: function () {
                    alert('Compose submitted failure!');
                }
            });
        }
    },
    onbtn_MyDealRefreshTap: function () {
        Ext.getStore('MyDealStore').load();
    },
    onbtn_MyDealSearchKeyUp: function (field, e) {
        var keyCode = e.event.keyCode
        if (keyCode == 13) {
            var _store = Ext.getStore('MyDealStore');
            _store.getProxy().config.extraParams.Search = field.getValue();
            _store.loadPage(1);
        }
    },
    onbtn_MyDealSearchCleariconTap: function (field, e) {
        var _store = Ext.getStore('MyDealStore');
        _store.getProxy().config.extraParams.Search = '';
        _store.loadPage(1);
    },
    onbtn_MyDealDetailTap: function () {
        //btn_Detail btn_History 變色
        Ext.getCmp('btn_MyDealDetail').setUi('confirm');
        Ext.getCmp('btn_MyDealHistory').setUi('normal');
        //權限處理"Moderator -> Edit"
        if (Group == 'Moderator') {
            Ext.getCmp('btn_MyDealEdit').show();
            Ext.getCmp('btn_MyDealActivities').show();  
        } else {
            Ext.getCmp('btn_MyDealEdit').hide();
            Ext.getCmp('btn_MyDealActivities').hide(); 
        }
        //Ext.getCmp('btn_MyDealActivities').hide();
        Ext.getCmp('btn_MyDealComments').hide();
        Ext.getCmp('mainpanel').setActiveItem(0);
    },
    onbtn_MyDealHistoryTap: function () {
        //btn_Detail btn_History 變色
        Ext.getCmp('btn_MyDealHistory').setUi('confirm');
        Ext.getCmp('btn_MyDealDetail').setUi('normal');

        Ext.getCmp('btn_MyDealEdit').hide();
        //權限處理"Moderator -> Edit"
        if (Group == 'Moderator') {
            Ext.getCmp('btn_MyDealActivities').show();
        } else {
            Ext.getCmp('btn_MyDealActivities').hide();
        }
        //Ext.getCmp('btn_MyDealActivities').show();
        Ext.getCmp('btn_MyDealComments').show();
        Ext.getCmp('mainpanel').setActiveItem(1);
    },
    onbtn_MyDealEditTap: function () {
        Ext.getCmp('mainpanel').setActiveItem(2);
    },
    onbtn_MyDealActivitiesTap: function () {
        Ext.getCmp('mainpanel').setActiveItem(4);
    },
    onbtn_MyDealCommentsTap: function () {
        Ext.getCmp('mainpanel').setActiveItem(3);
    },
    onbtn_MyDealActivitiesSubmitTap: function () {
        if (Ext.getCmp('activitiespanel')) {
            if (Ext.getCmp('Activities') != null && Ext.getCmp('Activities').getValue() != '') {
                var _form = Ext.getCmp('activitiespanel');
                Ext.getCmp('Activities_BasicInfo_ID').setValue(F_BasicInfo_ID);
                _form.submit({
                    //waitMsg: { message: 'Submitting', cls: 'demos-loading' },
                    url: WS_Url,
                    method: 'Post',
                    params: Ext.urlEncode(_form.getValues(true)),
                    success: function () {
                        //清空Compose
                        _form.reset();
                        //更新Commemts
                        var Commemts_Store = Ext.getCmp('historypanel').getStore();
                        Commemts_Store.getProxy().config.extraParams.actiontype = 'History';
                        Commemts_Store.getProxy().config.extraParams.BasicInfo_ID = F_BasicInfo_ID;
                        Commemts_Store.getProxy().config.extraParams.AO = F_AO;
                        Commemts_Store.load();
                        //切換到Commemts                             
                        Ext.getCmp('mainpanel').setActiveItem(1);
                    },
                    failure: function () {
                        alert('Activities submitted failure!');
                    }
                });
            }
            else {
                Ext.Msg.alert('Activities is null', 'Please enter activities.', Ext.emptyFn)
            }
        }
    },
    onbtn_MyDealQuickReplyTap: function () {
        var picker = Ext.create('Ext.Picker', {
            doneButton: {
                text: 'Submit',
                handler: function () {
                    //直接寫入Comments
                    if (Ext.getCmp('Comments')) {
                        var ComposeText = Ext.getCmp('Comments').getValue();
                        ComposeText += picker.getValue().ComposeText;
                        Ext.getCmp('Comments').setValue(ComposeText);
                    }

                    //直接寫入DB
                    //                                Ext.Ajax.request({
                    //                                    url: WS_Url,
                    //                                    method: 'Post',
                    //                                    params: {
                    //                                        actiontype: 'Compose',
                    //                                        ComposeText: picker.getValue().ComposeText,
                    //                                        BasicInfo_ID: F_BasicInfo_ID,
                    //                                        AO: F_AO,
                    //                                        Name:Name
                    //                                    },
                    //                                    success: function (response) {
                    //                                        var Commemts_Store = Ext.getCmp('historypanel').getStore();
                    //                                        Commemts_Store.getProxy().extraParams.actiontype = 'History';
                    //                                        Commemts_Store.getProxy().extraParams.BasicInfo_ID = F_BasicInfo_ID;
                    //                                        Commemts_Store.getProxy().extraParams.AO = F_AO;
                    //                                        Commemts_Store.read();
                    //                                        //切換到Commemts                             
                    //                                        Ext.getCmp('mainpanel').setActiveItem(1);
                    //                                    }
                    //                                });
                }
            },
            slots: [{
                name: 'ComposeText',
                title: 'Quick Reply',
                store: 'QuickSelectionStore'
                //                data: [
                //                        { text: '我對這個案子有興趣，請安排時間報告。', value: '我對這個案子有興趣，請安排時間報告。' },
                //                        { text: '請安排與團隊主要成員會面。', value: '請安排與團隊主要成員會面。' },
                //                        { text: '這個案子值得積極關注。', value: '這個案子值得積極關注。' },
                //                        { text: '請進行DD。', value: '請進行DD。' },
                //                        { text: '建議對相關政策做進一步瞭解。', value: '建議對相關政策做進一步瞭解。' },
                //                        { text: '請與CRI聯繫，進一步研究。', value: '請與CRI聯繫，進一步研究。' },
                //                        { text: '成立跨部門專案。', value: '成立跨部門專案。' }
                //                    ]
            }]
        });
        Ext.Viewport.add(picker);
        picker.show();
    },
    onbtn_MyDealCommentsSubmitTap: function () {
        if (Ext.getCmp('composepanel')) {
            if (Ext.getCmp('Comments') != null && Ext.getCmp('Comments').getValue() != '') {
                Ext.getCmp('Compose_BasicInfo_ID').setValue(F_BasicInfo_ID);
                Ext.getCmp('Name').setValue(Name);
                var _form = Ext.getCmp('composepanel');
                _form.submit({
                    //waitMsg: { message: 'Submitting', cls: 'demos-loading' },
                    url: WS_Url,
                    method: 'Post',
                    params: Ext.urlEncode(_form.getValues(true)),
                    success: function () {
                        //清空Compose
                        _form.reset();
                        //更新Commemts
                        var Commemts_Store = Ext.getCmp('historypanel').getStore();
                        Commemts_Store.getProxy().config.extraParams.actiontype = 'History';
                        Commemts_Store.getProxy().config.extraParams.BasicInfo_ID = F_BasicInfo_ID;
                        Commemts_Store.getProxy().config.extraParams.AO = F_AO;
                        Commemts_Store.load();
                        //切換到Commemts                             
                        Ext.getCmp('mainpanel').setActiveItem(1);
                    },
                    failure: function () {
                        Ext.Msg.alert('', 'Compose submitted failure!');
                    }
                });
            }
            else {
                Ext.Msg.alert('Commemts is null', 'Please enter commemts.', Ext.emptyFn)
            }
        }
    },
    oncbo_Status_Name_EditFormChange: function (Select, newValue, oldValue, eOpts) {
        if (Ext.getCmp('cbo_Reason_Name_EditForm')) {
            var SelectField = Ext.getCmp('cbo_Reason_Name_EditForm');
            SelectField.getStore().clearFilter();
            if (newValue.data.Value == 'Drop') {

            }
            else {
                SelectField.getStore().filter('text', '　');
            }
        }
    }
});
