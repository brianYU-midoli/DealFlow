Ext.define('GeoCon.view.mydeal.DetailPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'detailpanel',
    config: {
        //                modal: true,
        //                hideOnMaskTap: false,
        //                centered: true,
        //                height: '95%',
        //                width: '98%',
        items: [{
            xtype: 'fieldset',
            title: '',
            defaults: {
                labelWidth: '15%',
                readOnly: true
            },
            items: [{
                xtype: 'textfield',
                name: 'BasicInfo_ID',
                label: 'ID'
            }, {
                xtype: 'textfield',
                name: 'AO',
                label: 'AO'
            }, {
                xtype: 'textfield',
                name: 'Name',
                label: 'Name'
            }, {
                xtype: 'textareafield',
                maxRows: 10,
                name: 'Description',
                label: 'Description'
            }, {
                xtype: 'textfield',
                name: 'Status_Name',
                label: 'Status'
            }, {
                xtype: 'textfield',
                name: 'Drop_Reason_Name',
                label: 'Drop Reasons'
            }, {
                xtype: 'textfield',
                name: 'Website',
                label: '<a style="text-decoration:none" href="javascript:winOpen()">Website</a>'
            }, {
                xtype: 'textfield',
                name: 'Industry_Catagory_Name',
                label: 'Industry'
            }, {
                xtype: 'textfield',
                name: 'Deal_Source_Name',
                label: 'Deal Source'
            }, {
                xtype: 'textfield',
                name: 'Moderator',
                label: 'Moderator'
            }, {
                xtype: 'textfield',
                name: 'Str_Create_Date',
                label: 'Create Date'
            }, {
                xtype: 'textfield',
                name: 'Str_Modify_Date',
                label: 'Modify Date'
            }]
        }]
    }
});