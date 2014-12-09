Ext.define('GeoCon.view.taskassign.MyUserList', {
    extend: 'Ext.List',
    config: {
        //plugins: 'brianpullrefresh',
        //plugins: [
        //            { xclass: 'Ext.plugin.ListPaging' },
        //            { xclass: 'Ext.plugin.PullRefresh' }
        //        ],
        //emptyText: '<div style="width:100%;text-align:center;font-size:22px">No Data!</div>',
        store: 'UserListStore',
        itemTpl: '<div style="width:100%;"><b>{Title}</b></div><div style="width:65%;display:inline;font-size:14px;color:gray;">{str_AssignTo}</div><div style="width:35%;display:inline;font-size:14px;<tpl for="OverTime"><tpl if="Y">color:dodgerblue<tpl else>color:red</tpl></tpl>;text-align:right;float:right;">{TaskStatustTypeName_v2}</div>'
    }
});