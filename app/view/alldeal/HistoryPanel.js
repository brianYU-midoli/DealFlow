Ext.define('GeoCon.view.alldeal.HistoryPanel', {
    extend: 'Ext.List',
    config: {
        //emptyText: '<div style="width:100%;text-align:center;font-size:22px">No Data!</div>',
        //emptyText: '<div class="x-loading-spinner" style="font-size: 180%; margin: 10px auto;"><span class="x-loading-top"></span><span class="x-loading-right"></span><span class="x-loading-bottom"></span><span class="x-loading-left"></span></div><div class="x-list-paging-msg">No More Records</div></div>',
        plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],
        store: 'AllDealHistoryStore',
        cls: 'DeaLog-list',
        selectedCls: 'DeaLog-list-item-selected',
        //itemTpl: '<table><tr><td rowspan="2"><img src="resources/themes/images/default/edu_languages.png" /></td><td><strong>{User}:</strong></td></tr><tr><td><em>{Comments}</em></td></tr></table>'
        itemTpl: '<table style="width:100%;"><tr><td width="55px" style="vertical-align:top;" rowspan="2"><img width:"48px" height="48px" src="' + Icon_Url + '{Icon}.png" /></td><td  style="color:gray;">{User}</td><td align="right" width="200px" style="color:dodgerblue;">{Str_Modify_Date}</td></tr><tr><td colspan="2"><div>{Comments}</div></td></tr></table>'
    }
});