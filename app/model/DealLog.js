Ext.define('GeoCon.model.DealLog', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['BasicInfo_ID', 'Name', 'Status_Name', 'Description', 'Area_Name',
         'AO', 'Modify_Date', 'Str_Modify_Date', 'Industry', 'Moderator', 'Create_Date',
         'Str_Create_Date', 'Deal_Source', 'IsSecret', 'Drop_Reason_Name', 'Deal_Source_Name', 
         'Website', 'Industry_Catagory_Name','Group']
    }
});
