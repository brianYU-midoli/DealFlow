Ext.define('GeoCon.store.MyTaskStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.MyTask', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.MyTask',
        proxy: {
            type: 'jsonp',
            url: TaskAssign_Url,
            extraParams: {
                actiontype: 'TaskAssign',
                Count: '25',
                Name: '',
                A: startNum,
                B: limitNum,
                UserType: "MyTask",
                Status:'工作狀態 (未完成)'
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        },
        listeners: {
            load: function (store) {
                isMyTaskStoreLosd = true;
                if (store.getCount() > 0) {
                    var _index = 0;
                    if (TaskID != "") {
                        _index = store.find('TaskID', TaskID);
                    }
                    if (_index == -1) {
                        _index = 0;
                    }
                    this._list = Ext.getCmp('mytasklist');
                    this._list.select(_index, true, false);
                }
                else {
                    Ext.getCmp('taskdetailpanel').reset();
                    Ext.getCmp('taskeditpanel').reset();
                }
            }
        }
    }
});
