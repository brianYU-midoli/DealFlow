Ext.define('GeoCon.store.QuickSelectionStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.QuickSelection', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.QuickSelection',
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                actiontype: 'QuickSelection'
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
