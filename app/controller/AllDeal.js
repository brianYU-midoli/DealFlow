Ext.define('GeoCon.controller.AllDeal', {
    extend: 'Ext.app.Controller',

    //requires: ['Ext.util.GeoLocation'],

    config: {
        refs: {
            'fileBtn': '#fileBtn'
        },
        control: {
            '#btn_DealLogtoHome':
            {
                //按下btn Home
                tap: 'onDealLogtoHomeTap'
            },
            fileBtn: {
                initialize: 'onFileBtnInit',
                submit: 'onFileBtnSubmit'
            },
            '#btn_AllDealQuickReply':
            {
                tap: 'onbtn_AllDealQuickReplyTap'
            },
            '#btn_AllDealCommentsSubmit':
            {
                tap: 'onbtn_AllDealCommentsSubmitTap'
            },
            '#btn_AllDealRefresh':
            {
                tap: 'onbtn_AllDealRefreshTap'
            },
            '#search':
            {
                keyup: 'onsearchKeyup',
                clearicontap: 'onsearchCleariconTap'
            },
            '#btn_AllDealReset':
            {
                tap: 'onbtn_AllDealResetTap'
            },
            '#Status_Name':
            {
                change: 'onStatus_NameChange'
            },
            '#Area_Name':
            {
                change: 'onArea_NameChange'
            },
            '#AO':
            {
                change: 'onAOChange'
            },
            '#Industry':
            {
                change: 'onIndustryChange'
            }
        }
    },
    onDealLogtoHomeTap: function () {
        //切換到Choose System Panel       
        if (Ext.getCmp('splashScreen')) {
            Ext.getCmp('splashScreen').setActiveItem(1);
        }
    },
    onbtn_AllDealQuickReplyTap: function () {
        var picker = Ext.create('Ext.Picker', {
            doneButton: {
                text: 'Submit',
                handler: function () {
                    //直接寫入Comments
                    if (Ext.getCmp('AllComments')) {
                        var ComposeText = Ext.getCmp('AllComments').getValue();
                        ComposeText += picker.getValue().ComposeText;
                        Ext.getCmp('AllComments').setValue(ComposeText);
                    }
                }
            },
            slots: [{
                name: 'ComposeText',
                title: 'Quick Reply',
                store: 'QuickSelectionStore'
                //                data: [
                //                                { text: '我對這個案子有興趣，請安排時間報告。', value: '我對這個案子有興趣，請安排時間報告。' },
                //                                { text: '請安排與團隊主要成員會面。', value: '請安排與團隊主要成員會面。' },
                //                                { text: '這個案子值得積極關注。', value: '這個案子值得積極關注。' },
                //                                { text: '請進行DD。', value: '請進行DD。' },
                //                                { text: '建議對相關政策做進一步瞭解。', value: '建議對相關政策做進一步瞭解。' },
                //                                { text: '請與CRI聯繫，進一步研究。', value: '請與CRI聯繫，進一步研究。' },
                //                                { text: '成立跨部門專案。', value: '成立跨部門專案。' }
                //                            ]
            }]
        });
        Ext.Viewport.add(picker);
        picker.show();
    },
    onbtn_AllDealCommentsSubmitTap: function () {
        if (Ext.getCmp('allcomposepanel')) {
            if (Ext.getCmp('AllComments') != null && Ext.getCmp('AllComments').getValue() != '') {
                Ext.getCmp('AllName').setValue(Name);
                var _form = Ext.getCmp('allcomposepanel');
                Ext.getCmp('AllCompose_BasicInfo_ID').setValue(F_BasicInfo_ID);
                _form.submit({
                    //waitMsg: { message: 'Submitting', cls: 'demos-loading' },
                    url: WS_Url,
                    method: 'Post',
                    params: Ext.urlEncode(_form.getValues(true)),
                    success: function () {
                        //清空Compose
                        _form.reset();
                        //更新Commemts
                        var Commemts_Store = Ext.getCmp('allhistorypanel').getStore();
                        Commemts_Store.getProxy().config.extraParams.actiontype = 'History';
                        Commemts_Store.getProxy().config.extraParams.BasicInfo_ID = F_BasicInfo_ID;
                        Commemts_Store.getProxy().config.extraParams.AO = F_AO;
                        Commemts_Store.load();
                        //切換到Commemts                             
                        Ext.getCmp('allmainpanel').setActiveItem(2);
                    },
                    failure: function () {
                        Ext.Msg.alert('Failure', 'Compose submitted failure!', Ext.emptyFn);
                    }
                });
            }
            else {
                Ext.Msg.alert('Commemts is null', 'Please enter commemts.', Ext.emptyFn)
            }
        }
    },
    onbtn_AllDealRefreshTap: function () {
        Ext.getStore('AllDealStore').load();
    },
    onsearchKeyup: function (field, e) {
        var keyCode = e.event.keyCode
        if (keyCode == 13) {
            var _store = Ext.getStore('AllDealStore');
            _store.getProxy().config.extraParams.Search = field.getValue();
            _store.loadPage(1);
        }
    },
    onsearchCleariconTap: function (field, e) {
        var _store = Ext.getStore('AllDealStore');
        _store.getProxy().config.extraParams.Search = '';
        _store.loadPage(1);
    },
    onbtn_AllDealResetTap: function () {
        pageNum = 1;
        Ext.getCmp('Status_Name').reset();
        Ext.getCmp('Area_Name').reset();
        Ext.getCmp('AO').reset();
        Ext.getCmp('Industry').reset();
        var _store = Ext.getStore('AllDealStore');
        _store.loadPage(1);
    },
    onStatus_NameChange: function (Select, newValue, oldValue, eOpts) {
        if (oldValue != null) {
            var _store = Ext.getStore('AllDealStore');
            _store.getProxy().config.extraParams.Status_Name = newValue.data.Value;
            _store.getProxy().config.extraParams.Search = Ext.getCmp('search').getValue();
            _store.loadPage(1);
        }
    },
    onArea_NameChange: function (Select, newValue, oldValue, eOpts) {
        if (oldValue != null) {
            var _store = Ext.getStore('AllDealStore');
            _store.getProxy().config.extraParams.Area_Name = newValue.data.Value;
            _store.getProxy().config.extraParams.Search = Ext.getCmp('search').getValue();
            _store.loadPage(1);
        }
    },
    onAOChange: function (Select, newValue, oldValue, eOpts) {
        if (oldValue != null) {
            var _store = Ext.getStore('AllDealStore');
            _store.getProxy().config.extraParams.AO = newValue.data.Value;
            _store.getProxy().config.extraParams.Search = Ext.getCmp('search').getValue();
            _store.loadPage(1);
        }
    },
    onIndustryChange: function (Select, newValue, oldValue, eOpts) {
        if (oldValue != null) {
            var _store = Ext.getStore('AllDealStore');
            _store.getProxy().config.extraParams.Industry = newValue.data.Value;
            _store.getProxy().config.extraParams.Search = Ext.getCmp('search').getValue();
            _store.loadPage(1);
        }
    },
    onFileBtnInit: function (fileBtn) {
        var me = this;

        console.log('Init');

        fileBtn.setCallbacks({
            scope: me,
            success: me.onFileUploadSuccess,
            failure: me.onFileUploadFailure
        });
    },

    onFileBtnSubmit: function () {
        console.log('Submit');
    },

    onFileUploadSuccess: function (response) {
        console.log('Success');

        /*var loaded = Ext.getCmp('loadedImage');

        if (loaded) {
        loaded.destroy();
        }

        var image = Ext.create('Ext.Img', {
        id: 'loadedImage',
        width: 250,
        height: 200,
        src: response.base64,
        style: 'background-size: contain; margin-top: 20px; border-radius: 15px;'
        });

        var wlc = Ext.getCmp('welcome');
        wlc.add(image);
        image.show('fadeIn');
        */
        Ext.Msg.alert('File upload', 'Success!');
    },

    onFileUploadFailure: function () {
        console.log('Failure');
        Ext.Msg.alert('File upload', 'Failure!');
    }
});
