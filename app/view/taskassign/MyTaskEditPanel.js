Ext.define('GeoCon.view.taskassign.MyTaskEditPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'mytaskdetailpanel',
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
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'MyTaskEdit'
            }, {
                xtype: 'hiddenfield',
                name: 'TaskID'
            }, {
                xtype: 'hiddenfield',
                id: 'MyTask_Name_Edit',
                name: 'Name'
            }, {
                xtype: 'textfield',
                name: 'Title',
                label: '標題'
            }, {
                xtype: 'textareafield',
                maxRows: 4,
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
            }, {
                xtype: 'textfield',
                name: 'str_Owner',
                label: '指派人'
                //            }, {
                //                xtype: 'textfield',
                //                name: 'str_AssignTo',
                //                label: '負責人'
            }, {
                xtype: 'textfield',
                name: 'str_Assist',
                label: '協辦人'
            }, {
                xtype: 'textfield',
                name: 'str_CCTo',
                label: '副本知會'
            }, {
                id: 'cbo_mytaskprocess',
                xtype: 'selectfield',
                label: '工作進度',
                name: 'Process',
                store: 'ProcessTypeCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                readOnly: false,
                cls: 'SelectTask'
            }, {
                id: 'cbo_mytaskstatus',
                xtype: 'selectfield',
                label: '工作狀態',
                name: 'TaskStatus',
                store: 'TaskStatusTypeCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                readOnly: false,
                cls: 'SelectTask'
                
            }, {
                xtype: 'textfield',
                name: 'str_StartDate',
                label: '起始日'
            }, {
                xtype: 'textfield',
                name: 'str_DueDate',
                label: '到期日'
            }, {
                id: 'btn_MyTaskEditSubmit',
                xtype: 'button',
                text: 'Submit'
            }]
        }]
    }
});