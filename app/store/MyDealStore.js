Ext.define('GeoCon.store.MyDealStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.DealLog', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.DealLog',
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                actiontype: 'MyDealLogV2',
                Count: '50',
                Name: '',
                A: startNum,
                B: limitNum
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
