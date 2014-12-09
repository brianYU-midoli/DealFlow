
Ext.define('GeoCon.view.splash.ChooseSystem', {
    extend: 'Ext.DataView',
    config: {
        store: {
            fields: ['name', 'url'],
            data: [{
                name: '01', url: 'eos-iPad-TaskAssign-01-01.png'
            }, {
                name: '02', url: 'eos-iPad-TaskAssign-02-01.png'
            }, {
                name: 'DealLog', url: 'eos-iPad-TaskAssign-03-01.png'
            }, {
                name: 'Task', url: 'eos-iPad-TaskAssign-04-01.png'
            }, {
                name: '05', url: 'eos-iPad-TaskAssign-05-01.png'
            }]
        },
        baseCls: 'categories-list',
        scrollable:false,
        itemTpl: [
            '<div class="image" style="background-image:url(http://eosws.cidgroup.com/images/TaskAssign-img/{url})"></div>'
        ].join(''),
        listeners: {
            itemtap: function (list, index, item, record) {
                if (Ext.getCmp('splashScreen')) {
                    switch (record.get('name')) {
                        case 'DealLog':
                            //更新DealSourceCodeValueStore
                            Ext.getStore('DealSourceCodeValueStore').load();
                            //更新DropReasonCodeValueStore
                            Ext.getStore('DropReasonCodeValueStore').load();
                            //更新EditStatusCodeValueStore
                            Ext.getStore('EditStatusCodeValueStore').load();
                            //更新StatusCodeValueStore
                            Ext.getStore('StatusCodeValueStore').load();
                            //更新RegionCodeValueStore
                            Ext.getStore('RegionCodeValueStore').load();
                            //更新QuickSelectionStore
                            Ext.getStore('QuickSelectionStore').load();
                            //更新IndustryCodeValueStore
                            Ext.getStore('IndustryCodeValueStore').load();
                            //更新AO
                            Ext.getStore('AOCodeValueStore').load();
                            //更新AllDealLog
                            Ext.getStore('AllDealStore').load();
                            //更新MyDealLog
                            var MyDealLog_Store = Ext.getStore('MyDealStore');
                            MyDealLog_Store.getProxy().config.extraParams.Name = Name;
                            MyDealLog_Store.load();

                            //切換到All DealLog Panel       
                            Ext.getCmp('splashScreen').setActiveItem(2);
                            //預設第一分頁(AllDealPanel)顯示
                            if (Ext.getCmp('deallog')) {
                                Ext.getCmp('deallog').setActiveItem(0);
                            }
                            break;
                        case 'Task':                           
                            //更新TaskStatusTypeCodeValueStore
                            Ext.getStore('TaskStatusTypeCodeValueStore').load();
                            //更新ProcessTypeCodeValueStore
                            Ext.getStore('ProcessTypeCodeValueStore').load();
                            //更新TaskSourceCodeValueStore  
                            Ext.getStore('TaskSourceCodeValueStore').load();
                            //更新PriorityTypeCodeValueStore
                            Ext.getStore('PriorityTypeCodeValueStore').load();
                            //更新TaskTypeNameCodeValueStore  
                            Ext.getStore('TaskTypeNameCodeValueStore').load();
                            //更新UserListStore  
                            Ext.getStore('UserListStore').load();
                            //更新OwnerListStore  
                            Ext.getStore('OwnerListStore').load();
                            //更新AssignToListStore  
                            Ext.getStore('AssignToListStore').load();
                            //更新TaskSelectStore  
                            Ext.getStore('TaskSelectStore').load();

                            //更新MyTaskStore
                            //var MyTask_Store = Ext.getStore('MyTaskStore');
                            //MyTask_Store.getProxy().config.extraParams.Name = Name;
                            //MyTask_Store.load();

                            //更新MyAssignToStore
                            //var MyAssignTo_Store = Ext.getStore('MyAssignToStore');
                            //MyAssignTo_Store.getProxy().config.extraParams.Name = Name;
                            //MyAssignTo_Store.load();

                            //切換到Task Panel       
                            Ext.getCmp('splashScreen').setActiveItem(3);
                            //預設第一分頁(MyTask)顯示
                            if (Ext.getCmp('taskassign')) {
                                Ext.getCmp('taskassign').setActiveItem(0);
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
});



/*
Ext.define('GeoCon.view.splash.ChooseSystem', {
extend: 'Ext.Panel',
//xtype: 'choosesystem',
config: {
styleHtmlContent: true,
html: '<div id="background"><img src="resources/images/TaskAssign-img/eos-iPad-TaskAssign-01-20121121.png" /><div id="menu"><table width="200" border="0" cellpadding="20" class="menu_v1"><tr><td><img src="resources/images/TaskAssign-img/eos-iPad-TaskAssign-01-01-20121121.png" width="112" height="158" /></td><td><img src="resources/images/TaskAssign-img/eos-iPad-TaskAssign-01-02-20121121.png" width="112" height="158" /></td><td><a href=javascript:OpenDealLogTap() ><img src="resources/images/TaskAssign-img/eos-iPad-TaskAssign-01-03-20121121.png" name="Image4" width="112" height="158" border="0" id="Image4" /></a></td><td><a href="javascript:OpenTaskTap();" ><img src="resources/images/TaskAssign-img/eos-iPad-TaskAssign-01-04-20121121.png" name="Image5" width="112" height="158" border="0" id="Image5" /></a></td><td><img src="resources/images/TaskAssign-img/eos-iPad-TaskAssign-01-05-20121121.png" width="112" height="158" /></td></tr></table></div></div>'
}
});
*/
/*
var touchTeam = Ext.create('Ext.DataView', {
fullscreen: true,
store: {
fields: ['name', 'age'],
data: [
{ name: 'Jamie', age: 100 },
{ name: 'Rob', age: 21 },
{ name: 'Tommy', age: 24 },
{ name: 'Jacky', age: 24 },
{ name: 'Ed', age: 26 }
]
},

itemTpl: '<div>{name} is {age} years old</div>'
});
*/
