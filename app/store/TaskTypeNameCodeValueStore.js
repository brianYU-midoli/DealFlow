Ext.define('GeoCon.store.TaskTypeNameCodeValueStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.CodeValue', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.CodeValue',
        proxy: {
            type: 'jsonp',
            url: TaskAssign_Url,
            extraParams: {
                actiontype: 'TaskType'
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
