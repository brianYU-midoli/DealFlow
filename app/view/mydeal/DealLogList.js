Ext.define('GeoCon.view.mydeal.DealLogList', {
    extend: 'Ext.List',
    config: {
        //plugins: 'brianpullrefresh',
        plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],
        //emptyText: '<div style="width:100%;text-align:center;font-size:22px">No Data!</div>',
        store: 'MyDealStore',
        itemTpl: '<table width="100%"><tr><td colspan="2"><b>{Name}</b></td></tr><tr><td style="font-size:14px;color:gray;">{AO}</td><td style="font-size:14px;color:dodgerblue;text-align:right;">{Str_Modify_Date}</td></tr></table>'
    }
});