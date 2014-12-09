Ext.define('GeoCon.view.mydeal.EditPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'editpanel',
    config: {
        //        modal: true,
        //        hideOnMaskTap: false,
        //        centered: true,
        //        height: '95%',
        //        width: '98%',
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
                value: 'EditDealLog'
            }, {
                xtype: 'hiddenfield',
                id: 'Modify_by',
                name: 'Modify_by',
                value: Name
            }, {
                xtype: 'textfield',
                name: 'BasicInfo_ID',
                label: 'ID',
                readOnly: true
            }, {
                xtype: 'textfield',
                label: 'AO',
                name: 'AO',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'Name',
                label: 'Name'
            }, {
                xtype: 'textareafield',
                name: 'Description',
                label: 'Description'
            }, {
                id: 'cbo_Status_Name_EditForm',
                xtype: 'selectfield',
                label: 'Status',
                name: 'Status_Name',
                store: 'EditStatusCodeValueStore',
                displayField: 'Name',
                valueField: 'Value'
                //                options: [{
                //                    text: 'Screening', value: 'Screening'
                //                }, {
                //                    text: 'DD', value: 'DD'
                //                }, {
                //                    text: 'Approved', value: 'Approved'
                //                }, {
                //                    text: 'Completed', value: 'Completed'
                //                }, {
                //                    text: 'Pending', value: 'Pending'
                //                }, {
                //                    text: 'Drop', value: 'Drop'
                //                }, {
                //                    text: 'CRI-Screening', value: 'CRI-Screening'
                //                }, {
                //                    text: 'CRI-Drop', value: 'CRI-Drop'
                //                }]
            }, {
                xtype: 'selectfield',
                id: 'cbo_Reason_Name_EditForm',
                name: 'Drop_Reason_Name',
                label: 'Drop Reasons',
                store: 'DropReasonCodeValueStore',
                displayField: 'Name',
                valueField: 'Value'
                //                options: [{
                //                    text: '　', value: '', Category: ''
                //                }, {
                //                    text: 'Business Model - Lack of focus', value: 'Business Model - Lack of focus', Category: 'Drop'
                //                }, {
                //                    text: 'Business Model - cannot scale up', value: 'Business Model - cannot scale up', Category: 'Drop'
                //                }, {
                //                    text: 'Business Model - Slow growth', value: 'Business Model - Slow growth', Category: 'Drop'
                //                }, {
                //                    text: "VC's Policies - Outside fund focus", value: "VC's Policies - Outside fund focus", Category: 'Drop'
                //                }, {
                //                    text: "VC's Policies - Competitor of portfolio company", value: "VC's Policies - Competitor of portfolio company", Category: 'Drop'
                //                }, {
                //                    text: "VC's Policies - Shopped deal", value: "VC's Policies - Shopped deal", Category: 'Drop'
                //                }, {
                //                    text: "Valuation/Exit - Valuation too high", value: "Valuation/Exit - Valuation too high", Category: 'Drop'
                //                }, {
                //                    text: 'Valuation/Exit - No exit', value: 'Valuation/Exit - No exit', Category: 'Drop'
                //                }, {
                //                    text: 'Market - Intense competition', value: 'Market - Intense competition', Category: 'Drop'
                //                }, {
                //                    text: 'Market - Price control', value: 'Market - Price control', Category: 'Drop'
                //                }, {
                //                    text: 'Market - Market acceptance problems', value: 'Market - Market acceptance problems', Category: 'Drop'
                //                }, {
                //                    text: 'Profitability - Low margins', value: 'Profitability - Low margins', Category: 'Drop'
                //                }, {
                //                    text: 'Profitability - High burn rate', value: 'Profitability - High burn rate', Category: 'Drop'
                //                }, {
                //                    text: 'Management - No CEO', value: 'Management - No CEO', Category: 'Drop'
                //                }, {
                //                    text: 'Management - Management change', value: 'Management - Management change', Category: 'Drop'
                //                }, {
                //                    text: 'Management - Execution weakness', value: 'Management - Execution weakness', Category: 'Drop'
                //                }, {
                //                    text: 'Technology - Intellectual property problems', value: 'Technology - Intellectual property problems', Category: 'Drop'
                //                }, {
                //                    text: 'Technology - Commercialization difficulties', value: 'Technology - Commercialization difficulties', Category: 'Drop'
                //                }, {
                //                    text: 'Shareholders - Shareholder conflicts', value: 'Shareholders - Shareholder conflicts', Category: 'Drop'
                //                }, {
                //                    text: 'Shareholders - Shareholder dilution', value: 'Shareholders - Shareholder dilution', Category: 'Drop'
                //                }, {
                //                    text: 'Other', value: 'Other', Category: 'Drop'
                //                }]
            }, {
                xtype: 'textfield',
                name: 'Website',
                label: 'Website'
            }, {
                xtype: 'textfield',
                name: 'Industry_Catagory_Name',
                label: 'Industry',
                readOnly: true
            }, {
                xtype: 'selectfield',
                name: 'Deal_Source_Name',
                label: 'Deal Source',
                store: 'DealSourceCodeValueStore',
                displayField: 'Name',
                valueField: 'Value'
                //                options: [{
                //                    text: '', value: ''
                //                }, {
                //                    text: 'Cold Call', value: 'Cold Call'
                //                }, {
                //                    text: 'CRI', value: 'CRI'
                //                }, {
                //                    text: 'Industry Network', value: 'Industry Network'
                //                }, {
                //                    text: 'In-House Developed', value: 'In-House Developed'
                //                }, {
                //                    text: 'Intermediary', value: 'Intermediary'
                //                }, {
                //                    text: 'Other VC', value: 'Other VC'
                //                }, {
                //                    text: 'Strategic Partner', value: 'Strategic Partner'
                //                }, {
                //                    text: 'Unsolicited', value: 'Unsolicited'
                //                }, {
                //                    text: 'FA', value: 'FA'
                //                }]
            }, {
                xtype: 'textfield',
                name: 'Moderator',
                label: 'Moderator',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'Str_Create_Date',
                label: 'Create Date',
                readOnly: true
            }, {
                xtype: 'textfield',
                name: 'Str_Modify_Date',
                label: 'Modify Date',
                readOnly: true
            }]
        }, {
            xtype: 'panel',
            defaults: {
                xtype: 'button',
                style: 'margin: 0.1em',
                flex: 1
            },
            items: [{
                id: 'btn_MyDealEditSubmit',
                text: 'Submit'
            }]
        }]
    }
});