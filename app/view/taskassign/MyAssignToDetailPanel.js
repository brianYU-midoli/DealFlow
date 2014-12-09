Ext.define('GeoCon.view.taskassign.MyAssignToDetailPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'myassigntodetailpanel',
    config: {
        items: [{
            xtype: 'fieldset',
            //title: 'Personal Info',
            //instructions: 'Please enter the information above.',
            defaults: {
                labelWidth: '15%',
                readOnly: true
            },
            items: [{
                xtype: 'textfield',
                name: 'Title',
                label: '標題'
            }, {
                xtype: 'textareafield',
                maxRows: 3,
                name: 'Desc',
                label: '工作描述'
            }, {
                xtype: 'textfield',
                name: 'TaskTypeName',
                label: '工作類別'
            }, {
                xtype: 'textfield',
                name: 'TaskSourceName',
                label: '來自'
            }, {
                xtype: 'textfield',
                name: 'PriorityTypeName',
                label: '重要性'
//            }, {
//                xtype: 'textfield',
//                name: 'str_Owner',
//                label: '指派人'
            }, {
                xtype: 'textfield',
                name: 'str_AssignTo',
                label: '負責人'
            }, {
                xtype: 'textfield',
                name: 'str_Assist',
                label: '協辦人'
            }, {
                xtype: 'textfield',
                name: 'str_CCTo',
                label: '副本知會'
            }, {
                xtype: 'textfield',
                name: 'ProcessTypeName',
                label: '工作進度'
            }, {
                xtype: 'textfield',
                name: 'TaskStatustTypeName',
                label: '工作狀態'
            }, {
                xtype: 'textfield',
                name: 'str_StartDate',
                label: '起始日'
            }, {
                xtype: 'textfield',
                name: 'str_DueDate',
                label: '到期日'
            }, {
                xtype: 'panel',
                id:'AssignTOPanel',
                defaults: {
                    xtype: 'button',
                    style: 'margin: 0.1em',
                    flex: 1
                },
                layout: {
                    type: 'hbox'
                },
                items: [{
                    id: 'btn_MyAssignToReturnSubmit',
                    text: 'Reject'
                }, {
                    id: 'btn_MyAssignToCloseSubmit',
                    text: 'Comfirm'
                }]
            }]
        }]
    }
});