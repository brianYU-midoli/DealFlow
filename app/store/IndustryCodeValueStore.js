Ext.define('GeoCon.store.IndustryCodeValueStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.CodeValue', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.CodeValue',
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                actiontype: 'IndustryCodeValue'
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
