Ext.define('GeoCon.view.taskassign.MyAssignToNewPanel', {
    extend: 'Ext.form.Panel',
    //requires: ['GeoCon.view.taskassign.MyUserList'],
    xtype: 'myassigntonewpanel',
    config: {
        items: [{
            xtype: 'fieldset',
            defaults: {
                labelWidth: '100px'
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'TaskAssignInsert'
            }, {
                xtype: 'hiddenfield',
                name: 'Name',
                id: 'AssignTo_New_Name',
                value: ''
            }, {
                id: 'AssignTo_Title_New',
                xtype: 'textfield',
                name: 'Title',
                label: '標題'
            }, {
                xtype: 'textareafield',
                maxRows: 5,
                name: 'Desc',
                label: '工作描述'
            }, {
                xtype: 'selectfield',
                name: 'Type',
                label: '工作類別',
                store: 'TaskTypeNameCodeValueStore',
                displayField: 'Name',
                valueField: 'ID'
            }, {
                xtype: 'selectfield',
                name: 'TaskSource',
                label: '來自',
                store: 'TaskSourceCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                value: 3
            }, {
                xtype: 'selectfield',
                name: 'Priority',
                label: '重要性',
                store: 'PriorityTypeCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                value: 4
            }, {
                //                xtype: 'selectfield',
                //                label: '負責人',
                //                name: 'AssignTo',
                //                store: 'UserListStore',
                //                displayField: 'Name',
                //                valueField: 'ID'
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    labelWidth: '100px'
                },
                items: [{
                    id: 'AssignTo_New',
                    xtype: 'hiddenfield',
                    name: 'AssignTo'
                }, {
                    id: 'str_AssignTo_New',
                    xtype: 'textfield',
                    name: 'str_AssignTo',
                    //readOnly: true,
                    label: '負責人',
                    flex: 20
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
                                        /*
                                        this.str_Users = "";
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
                                                                                
                                        Ext.getCmp('str_AssignTo_New').setValue(this.str_Users);
                                        Ext.getCmp('AssignTo_New').setValue(this.Users_CCTO);
                                        */
                                        this.str_Users = Ext.getCmp('str_AssignTo_New').getValue();
                                        if (this.str_Users == "") {
                                            this.str_Users += records[0].get('Name');
                                        }
                                        else {
                                            this.str_Users += "," + records[0].get('Name');
                                        }
                                        Ext.getCmp('str_AssignTo_New').setValue(this.str_Users);
                                        selectable.hide();
                                    },
                                    hide: function (selectable, eOpts) {
                                        //清空之前已選項目
                                        if (Ext.getCmp('str_AssignTo_New').getValue() != '') {
                                            this.arr = Ext.getCmp('str_AssignTo_New').getValue().split(',');
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
                                    title: 'AssignTo_New'
                                }]
                            });
                        }
                        //多選預設值
                        /*
                        if (Ext.getCmp('str_AssignTo_New').getValue() != '') {
                            this.arr = Ext.getCmp('str_AssignTo_New').getValue().split(',');
                            for (var m = 0; m < this.arr.length; m++) {
                                this.int = this.overlay.getStore().find('Name', this.arr[m]);
                                this.overlay.select(this.int, true, true);
                            }
                        }*/
                        //else {
                        //    //清空之前已選項目
                        //    if (this.overlay.getSelectionCount() > 0) {
                        //        this.overlay.deselectAll(false);
                        //    }
                        //}
                        this.overlay.show();
                    }
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    labelWidth: '100px'
                },
                items: [{
                    id: 'Assist_New',
                    xtype: 'hiddenfield',
                    name: 'Assist'
                }, {
                    id: 'str_Assist_New',
                    xtype: 'textfield',
                    name: 'str_Assist',
                    label: '協辦人',
                    //readOnly: true,
                    flex: 20
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
                                    /*
                                        this.str_Users_Assist = "";
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
                                        Ext.getCmp('str_Assist_New').setValue(this.str_Users_Assist);
                                        Ext.getCmp('Assist_New').setValue(this.Users_Assist);
                                        */
                                        this.str_Users = Ext.getCmp('str_Assist_New').getValue();
                                        if (this.str_Users == "") {
                                            this.str_Users += records[0].get('Name');
                                        }
                                        else {
                                            this.str_Users += "," + records[0].get('Name');
                                        }
                                        Ext.getCmp('str_Assist_New').setValue(this.str_Users);
                                        selectable.hide();
                                    },
                                    hide: function (selectable, eOpts) {
                                        if (Ext.getCmp('str_Assist_New').getValue() != '') {
                                            this.arr = Ext.getCmp('str_Assist_New').getValue().split(',');
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
//                        if (Ext.getCmp('str_Assist_New').getValue() != '') {
//                            this.arr = Ext.getCmp('str_Assist_New').getValue().split(',');
//                            for (var m = 0; m < this.arr.length; m++) {
//                                this.int = this.overlay_Assist.getStore().find('Name', this.arr[m]);
//                                this.overlay_Assist.select(this.int, true, true);
//                            }
//                        }
                        //else {
                        //    //清空之前已選項目
                        //    if (this.overlay_Assist.getSelectionCount() > 0) {
                        //        this.overlay_Assist.deselectAll(false);
                        //    }
                        //}
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
                    id: 'CCTo_New',
                    xtype: 'hiddenfield',
                    name: 'CCTo'
                }, {
                    id: 'str_CCTo_New',
                    xtype: 'textfield',
                    name: 'str_CCTo',
                    //readOnly: true,
                    label: '副本知會',
                    flex: 20
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
                                mode: 'MULTI',
                                modal: true,
                                hideOnMaskTap: true,
                                centered: true,
                                width: 300,
                                height: 400,
                                scrollable: true,
                                listeners: {
                                    selectionchange: function (selectable, records, eOpts) {
                                        /*
                                        this.str_Users = "";
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
                                        Ext.getCmp('str_CCTo_New').setValue(this.str_Users);
                                        Ext.getCmp('CCTo_New').setValue(this.Users_CCTO);
                                        */
                                        this.str_Users = Ext.getCmp('str_CCTo_New').getValue();
                                        if (this.str_Users == "") {
                                            this.str_Users += records[0].get('Name');
                                        }
                                        else {
                                            this.str_Users += "," + records[0].get('Name');
                                        }
                                        Ext.getCmp('str_CCTo_New').setValue(this.str_Users);
                                        selectable.hide();
                                    },
                                    hide: function (selectable, eOpts) {
                                        if (Ext.getCmp('str_CCTo_New').getValue() != '') {
                                            this.arr = Ext.getCmp('str_CCTo_New').getValue().split(',');
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
//                        if (Ext.getCmp('str_CCTo_New').getValue() != '') {
//                            this.arr = Ext.getCmp('str_CCTo_New').getValue().split(',');
//                            for (var m = 0; m < this.arr.length; m++) {
//                                this.int = this.overlay.getStore().find('Name', this.arr[m]);
//                                this.overlay.select(this.int, true, true);
//                            }
//                        }
                        //else {
                        //    //清空之前已選項目
                        //    if (this.overlay.getSelectionCount() > 0) {
                        //        this.overlay.deselectAll(false);
                        //    }
                        //}
                        this.overlay.show();
                    }
                }]
                //            }, {
                //                //id: 'cbo_mytaskprocess',
                //                xtype: 'selectfield',
                //                label: '工作進度',
                //                name: 'Process',
                //                store: 'ProcessTypeCodeValueStore',
                //                displayField: 'Name',
                //                valueField: 'ID',
                //                readOnly: true
                //            }, {
                //                //id: 'cbo_mytaskstatus',
                //                xtype: 'selectfield',
                //                label: '工作狀態',
                //                name: 'TaskStatus',
                //                store: 'TaskStatusTypeCodeValueStore',
                //                displayField: 'Name',
                //                valueField: 'ID',
                //                readOnly: true
            }, {
                id: 'MyAssign_StartDate_New',
                xtype: 'datepickerfield',
                name: 'StartDate',
                label: '起始日',
                value: new Date()

            }, {
                id: 'MyAssign_DueDate_New',
                xtype: 'datepickerfield',
                name: 'DueDate',
                label: '到期日',
                value: new Date()
            }, {
                //id: 'btn_MyAssignToNewSubmit',
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
                        Ext.getCmp('assigntonewpanel').reset();
                    }
                }, {
                    id: 'btn_MyAssignToNewSubmit',
                    text: 'Submit'
                }]
            }]
        }]
    }
});

