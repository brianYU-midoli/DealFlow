Ext.define('GeoCon.store.AllDealStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.DealLog', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.DealLog',
        groupField: 'Str_Modify_Date',
        remoteSort: true,
        proxy: {
            type: 'jsonp',
            url: WS_Url,
            extraParams: {
                actiontype: 'AllDealLogV2',
                Count: '50',
                AO: '', //'AO01'
                Industry: '',
                Area_Name: '',
                Status_Name: '',
                Search: '',
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
