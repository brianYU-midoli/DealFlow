Ext.define('GeoCon.store.MyDealHistoryStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'GeoCon.model.History',
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                actiontype: 'History',
                BasicInfo_ID: '', //'10-0023',
                AO: ''//'AO01'
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
