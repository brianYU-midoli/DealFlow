Ext.define('GeoCon.store.DealSourceCodeValueStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.CodeValue', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.CodeValue',
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                actiontype: 'DealSourceCodeValue'
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
