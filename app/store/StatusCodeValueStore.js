Ext.define('GeoCon.store.StatusCodeValueStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.CodeValue', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.CodeValue',
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                actiontype: 'StatusCodeValue'
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
