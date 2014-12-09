Ext.define('GeoCon.view.taskassign.MyAssignToEditPanel', {
    extend: 'Ext.form.Panel',
    //requires: ['GeoCon.view.taskassign.MyUserList'],
    xtype: 'myassigntoeditpanel',
    config: {
        items: [{
            xtype: 'fieldset',
            defaults: {
                labelWidth: '100px'
            },

            items: [{
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'TaskAssignUpdate'
            }, {
                id: 'TaskID_MyAssignToEdit',
                xtype: 'hiddenfield',
                name: 'TaskID'
            }, {
                xtype: 'hiddenfield',
                name: 'Name',
                id: 'AssignTo_Edit_Name'
            }, {
                xtype: 'hiddenfield',
                name: 'str_AssignTo',
                id: 'AssignTo_Edit_str_AssignTo'
            }, {
                id: 'AssignTo_Title_Edit',
                xtype: 'textfield',
                name: 'Title',
                label: '標題',
                cls: 'SelectTask'
            }, {
                xtype: 'textareafield',
                maxRows: 4,
                name: 'Desc',
                label: '工作描述',
                cls: 'SelectTask'
            }, {
                xtype: 'selectfield',
                name: 'Type',
                label: '工作類別',
                store: 'TaskTypeNameCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                cls: 'SelectTask'
            }, {
                xtype: 'selectfield',
                name: 'TaskSource',
                label: '來自',
                store: 'TaskSourceCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                cls: 'SelectTask'
            }, {
                xtype: 'selectfield',
                name: 'Priority',
                label: '重要性',
                store: 'PriorityTypeCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                cls: 'SelectTask'
            }, {
                id: 'cbo_AssignTo_Edit_AssignTo',
                xtype: 'selectfield',
                label: '負責人',
                name: 'AssignTo',
                store: 'UserListStore',
                displayField: 'Name',
                valueField: 'ID',
                cls: 'SelectTask'
            }, {
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    labelWidth: '100px'
                },
                items: [{
                    id: 'Assist',
                    xtype: 'hiddenfield',
                    name: 'Assist'
                }, {
                    id: 'str_Assist',
                    xtype: 'textfield',
                    name: 'str_Assist',
                    label: '協辦人',
                    //readOnly: true,
                    flex: 20,
                    cls: 'SelectTask'
                }, {
                    flex: 1,
                    xtype: 'button',
                    iconCls: 'add',
                    iconMask: true,
                    ui: 'plain',
                    handler: function () {
                        if (!this.overlay_Assist) {
                            this.overlay_Assist = Ext.Viewport.add({
                                xtype: 'list',
                                itemTpl: '<div class="contact">{Name}</div>',
                                store: 'UserListStore',
                                mode: 'MULTI',
                                modal: true,
                                hideOnMaskTap: true,
                                centered: true,
                                width: 300,
                                height: 400,
                                scrollable: true,
                                listeners: {
                                    selectionchange: function (selectable, records, eOpts) {
                                        /*this.str_Users_Assist = "";
                                        this.Users_Assist = "";
                                        for (var i = 0; i < records.length; i++) {
                                            if (i < (records.length - 1)) {
                                                this.str_Users_Assist += records[i].get('Name') + ',';
                                                this.Users_Assist += records[i].get('ID') + ',';
                                            } else {
                                                this.str_Users_Assist += records[i].get('Name');
                                                this.Users_Assist += records[i].get('ID');
                                            }
                                        }
                                        Ext.getCmp('str_Assist').setValue(this.str_Users_Assist);
                                        Ext.getCmp('Assist').setValue(this.Users_Assist);
                                        */
                                        this.str_Users = Ext.getCmp('str_Assist').getValue();
                                        if (this.str_Users == "") {
                                            this.str_Users += records[0].get('Name');
                                        }
                                        else {
                                            this.str_Users += "," + records[0].get('Name');
                                        }
                                        Ext.getCmp('str_Assist').setValue(this.str_Users);
                                        selectable.hide();
                                    },
                                    hide: function (selectable, eOpts) {
                                        if (Ext.getCmp('str_Assist').getValue() != '') {
                                            this.arr = Ext.getCmp('str_Assist').getValue().split(',');
                                            for (var m = 0; m < this.arr.length; m++) {
                                                this.int = selectable.getStore().find('Name', this.arr[m]);
                                                selectable.deselect(this.int, true);
                                            }
                                        }
                                    }
                                },
                                items: [{
                                    docked: 'top',
                                    xtype: 'toolbar',
                                    title: 'Assist'
                                }]
                            });
                        }

                        //多選預設值
//                        if (Ext.getCmp('str_Assist').getValue() != '') {
//                            //暫時
//                            //this.overlay_Assist.deselectAll(true);
//                            this.arr = Ext.getCmp('str_Assist').getValue().split(',');
//                            for (var m = 0; m < this.arr.length; m++) {
//                                this.int = this.overlay_Assist.getStore().find('Name', this.arr[m]);
//                                this.overlay_Assist.select(this.int, true, true);
//                            }
//                        }
//                        else {
//                            //清空之前已選項目
//                            //if (this.overlay_Assist.getSelectionCount() > 0) {
//                            //    this.overlay_Assist.deselectAll(false);
//                            //}
//                        }
                        this.overlay_Assist.show();
                    }
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    labelWidth: '100px'
                },
                items: [{
                    id: 'CCTo',
                    xtype: 'hiddenfield',
                    name: 'CCTo'
                }, {
                    id: 'str_CCTo',
                    xtype: 'textfield',
                    name: 'str_CCTo',
                    //readOnly: true,
                    label: '副本知會',
                    flex: 20,
                    cls: 'SelectTask'
                }, {
                    flex: 1,
                    xtype: 'button',
                    iconCls: 'add',
                    iconMask: true,
                    ui: 'plain',
                    handler: function () {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype: 'list',
                                itemTpl: '<div class="contact">{Name}</div>',
                                store: 'UserListStore',
                                //mode: 'MULTI',
                                modal: true,
                                hideOnMaskTap: true,
                                centered: true,
                                width: 300,
                                height: 400,
                                scrollable: true,
                                listeners: {
                                    selectionchange: function (selectable, records, eOpts) {
                                        /*this.str_Users = "";
                                        this.Users_CCTO = "";
                                        for (var i = 0; i < records.length; i++) {
                                            if (i < (records.length - 1)) {
                                                this.str_Users += records[i].get('Name') + ',';
                                                this.Users_CCTO += records[i].get('ID') + ',';
                                            } else {
                                                this.str_Users += records[i].get('Name');
                                                this.Users_CCTO += records[i].get('ID');
                                            }
                                        }
                                        Ext.getCmp('str_CCTo').setValue(this.str_Users);
                                        Ext.getCmp('CCTo').setValue(this.Users_CCTO);*/
                                        this.str_Users = Ext.getCmp('str_CCTo').getValue();
                                        if (this.str_Users == "") {
                                            this.str_Users += records[0].get('Name');
                                        }
                                        else {
                                            this.str_Users += "," + records[0].get('Name');
                                        }
                                        Ext.getCmp('str_CCTo').setValue(this.str_Users);
                                        selectable.hide();
                                    },
                                    hide: function (selectable, eOpts) {
                                        if (Ext.getCmp('str_CCTo').getValue() != '') {
                                            this.arr = Ext.getCmp('str_CCTo').getValue().split(',');
                                            for (var m = 0; m < this.arr.length; m++) {
                                                this.int = selectable.getStore().find('Name', this.arr[m]);
                                                selectable.deselect(this.int, true);
                                            }
                                        }
                                    }
                                },
                                items: [{
                                    docked: 'top',
                                    xtype: 'toolbar',
                                    title: 'CCTo'
                                }]
                            });
                        }
                        //多選預設值
//                        if (Ext.getCmp('str_CCTo').getValue() != '') {
//                            this.arr = Ext.getCmp('str_CCTo').getValue().split(',');
//                            for (var m = 0; m < this.arr.length; m++) {
//                                this.int = this.overlay.getStore().find('Name', this.arr[m]);
//                                this.overlay.select(this.int, true, true);
//                            }
//                        }
//                        else {
//                            //清空之前已選項目
//                            if (this.overlay.getSelectionCount() > 0) {
//                                this.overlay.deselectAll(false);
//                            }
//                        }
                        this.overlay.show();
                    }
                }]
            }, {
                id: 'cbo_myassigntoprocess',
                xtype: 'selectfield',
                label: '工作進度',
                name: 'Process',
                store: 'ProcessTypeCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                readOnly: true,
                hidden:true
            }, {
                id: 'cbo_myassigntostatus',
                xtype: 'selectfield',
                label: '工作狀態',
                name: 'TaskStatus',
                store: 'TaskStatusTypeCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                readOnly: true,
                hidden: true
            }, {
                id: 'MyAssign_StartDate_Edit',
                xtype: 'datepickerfield',
                name: 'StartDate',
                label: '起始日',
                cls: 'SelectTask'
            }, {
                id: 'MyAssign_DueDate_Edit',
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
                        if (Ext.getCmp('assigntoeditpanel')) {
                            var _Record = Ext.getCmp('myassigntolist').getSelection()[0];
                            Ext.getCmp('assigntoeditpanel').setRecord(_Record);
                            TaskID = _Record.get('TaskID');
                        }
                    }
                }, {
                    id: 'btn_MyAssignToEditSubmit',
                    text: 'Submit'
                }]
            }]
        }]
    }
});

