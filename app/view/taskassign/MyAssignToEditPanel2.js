Ext.define('GeoCon.view.taskassign.MyAssignToEditPanel2', {
    extend: 'Ext.form.Panel',
    xtype: 'myassigntoeditpanel2',
    config: {
        items: [{
            xtype: 'fieldset',
            //title: 'Personal Info',
            //instructions: 'Please enter the information above.',
            defaults: {
                labelWidth: '15%'
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'TaskAssignUpdate'
            }, {
                id: 'TaskID_MyAssignToEdit2',
                xtype: 'hiddenfield',
                name: 'TaskID'
            }, {
                xtype: 'hiddenfield',
                name: 'Name',
                id: 'AssignTo_Edit_Name2'
            }, {
                xtype: 'textfield',
                name: 'Title',
                label: '標題',
                readOnly: true
            }, {
                xtype: 'textareafield',
                maxRows: 3,
                name: 'Desc',
                label: '工作描述',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'TaskTypeName',
                label: '工作類別',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'TaskSourceName',
                label: '來自',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'TaskSource',
                hidden: true
            }, {
                xtype: 'textfield',
                name: 'PriorityTypeName',
                label: '重要性',
                readOnly: true
//            }, {
//                xtype: 'textfield',
//                name: 'str_Owner',
//                label: '指派人'
            }, {
                xtype: 'textfield',
                name: 'Priority',
                hidden: true
            }, {
                xtype: 'textfield',
                name: 'str_AssignTo',
                label: '負責人',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'AssignTo',
                hidden: true
            }, {
                xtype: 'textfield',
                id: 'str_Assist2',
                name: 'str_Assist',
                label: '協辦人',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'Assist',
                hidden: true
            }, {
                xtype: 'textfield',
                id: 'str_CCTo2',
                name: 'str_CCTo',
                label: '副本知會',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'CCTo',
                hidden: true
            }, {
                xtype: 'textfield',
                name: 'Type',
                hidden: true
            }, {
                xtype: 'textfield',
                name: 'ProcessTypeName',
                label: '工作進度',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'TaskStatustTypeName',
                label: '工作狀態',
                readOnly: true
            }, {
                id: 'MyAssign_StartDate_Edit2',
                xtype: 'datepickerfield',
                name: 'StartDate',
                label: '起始日',
                cls: 'SelectTask'
            }, {
                id: 'MyAssign_DueDate_Edit2',
                xtype: 'datepickerfield',
                name: 'DueDate',
                label: '到期日',
                cls: 'SelectTask'
            }, {
                //id: 'btn_MyAssignToEditSubmit',
                //xtype: 'button',
                //text: 'Submit'
                xtype: 'panel',
                defaults: {
                    xtype: 'button',
                    style: 'margin: 0.1em',
                    flex: 1
                },
                layout: {
                    type: 'hbox'
                },
                items: [{
                    text: 'Reset',
                    handler: function () {
                        if (Ext.getCmp('assigntoeditpanel2')) {
                            var _Record = Ext.getCmp('myassigntolist').getSelection()[0];
                            Ext.getCmp('assigntoeditpanel2').setRecord(_Record);
                            TaskID = _Record.get('TaskID');
                        }
                    }
                }, {
                    id: 'btn_MyAssignToEditSubmit2',
                    text: 'Submit'
                }]
            }]
        }]
    }
});