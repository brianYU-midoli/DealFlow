Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'GeoCon',
    views: [
        'Main'
    ],
    controllers: [
        'AllDeal',
        'MyDeal',
    //'ChooseSystem'//,
        'TaskAssign'
    ],
    models: [
        'CodeValue',
        'DealLog',
        'History',
        'QuickSelection',
        'MyTask',
        'CommentsList'
    ],
    stores: [
        'AOCodeValueStore',
        'AllDealStore',
        'AllDealHistoryStore',
        'MyDealStore',
        'MyDealHistoryStore',
        'QuickSelectionStore',
        'IndustryCodeValueStore',
        'RegionCodeValueStore',
        'StatusCodeValueStore',
        'EditStatusCodeValueStore',
        'DropReasonCodeValueStore',
        'DealSourceCodeValueStore',
        'MyTaskStore',
        'MyAssignToStore',
        'MyTaskCMListStore',
        'MyAssignToCMListStore',
        'TaskStatusTypeCodeValueStore',
        'ProcessTypeCodeValueStore',
        'TaskSourceCodeValueStore',
        'PriorityTypeCodeValueStore',
        'TaskTypeNameCodeValueStore',
        'UserListStore',
        'AssignToListStore',
        'OwnerListStore',
        'TaskSelectStore'
    ],
    launch: function () {
        Ext.create('GeoCon.view.Main');
        if (localStorage.LoginName != null) {
            Ext.getCmp('LoginName').setValue(localStorage.LoginName);
        }
        if (localStorage.PassWord != null) {
            Ext.getCmp('PassWord').setValue(localStorage.PassWord);
        }
    }
});
