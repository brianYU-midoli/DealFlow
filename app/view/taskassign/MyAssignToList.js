Ext.define('GeoCon.view.taskassign.MyAssignToList', {
    extend: 'Ext.List',
    config: {
        //plugins: 'brianpullrefresh',
        plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],
        //emptyText: '<div style="width:100%;text-align:center;font-size:22px">No Data!</div>',
        store: 'MyAssignToStore',
        itemTpl: '<tpl for="IsRead"><tpl if="values == \'N\'"><img style="height:16px;width:16px;margin-right:5px;float:left;" src="' + Icon_Url + 'blueball.png" /><tpl else></tpl></tpl><div style="width:100%;"><b>{Title}</b></div><div style="width:60%;display:inline;font-size:14px;color:#3799FF;">{str_AssignTo}</div><div style="width:38%;display:inline;font-size:14px;<tpl for="OverTime"><tpl if="values == \'N\'">color:dodgerblue<tpl else>color:red</tpl></tpl>;text-align:right;float:right;">{TaskStatustTypeName_v2}</div>'
    }
});