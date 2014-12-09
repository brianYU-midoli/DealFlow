Ext.define('GeoCon.model.CommentsList', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        //'User',
        //'Icon',
        //'Modify_Date',
        //'Comments',
        //'Str_Modify_Date'
        "CommandTypeName",
        "CommandID",
        "Desc",
        "CreateUser",
        "CreateDate",
        "TaskID",
        "str_CreateUser",
        "str_CreateDate"
        ]
    }
});
