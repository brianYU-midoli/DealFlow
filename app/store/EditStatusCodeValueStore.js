Ext.define('GeoCon.store.EditStatusCodeValueStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.CodeValue', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.CodeValue',
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                actiontype: 'EidtStatusCodeValue'
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
