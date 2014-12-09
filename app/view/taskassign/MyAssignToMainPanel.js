Ext.define('GeoCon.view.taskassign.MyAssignToMainPanel', {
    extend: 'Ext.Panel',
    requires: [
        'GeoCon.view.taskassign.MyAssignToDetailPanel',
        'GeoCon.view.taskassign.MyAssignToCMList',
        'GeoCon.view.taskassign.MyAssignToEditPanel',
        'GeoCon.view.taskassign.MyAssignToEditPanel2',
        'GeoCon.view.taskassign.MyAssignToComposePanel',
        'GeoCon.view.taskassign.MyAssignToNewPanel'
    ],
    config: {
        layout: 'card',
        activeItem: 0,
        items: [{
            id: 'assigntodetailpanel',
            xclass: 'GeoCon.view.taskassign.MyAssignToDetailPanel'
        }, {
            id: 'assigntohistorypanel',
            xclass: 'GeoCon.view.taskassign.MyAssignToCMList'
        }, {
            id: 'assigntoeditpanel',
            xclass: 'GeoCon.view.taskassign.MyAssignToEditPanel'
        }, {
            id: 'assigntocomposepanel',
            xclass: 'GeoCon.view.taskassign.MyAssignToComposePanel'
        }, {
            id: 'assigntonewpanel',
            xclass: 'GeoCon.view.taskassign.MyAssignToNewPanel'
        }, {
            id: 'assigntoeditpanel2',
            xclass: 'GeoCon.view.taskassign.MyAssignToEditPanel2'
        }]
    }
});
