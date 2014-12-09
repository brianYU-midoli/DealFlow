Ext.define('GeoCon.view.mydeal.MainPanel', {
    extend: 'Ext.Panel',
    requires: [
        'GeoCon.view.mydeal.DetailPanel',
        'GeoCon.view.mydeal.HistoryPanel',
        'GeoCon.view.mydeal.EditPanel',
        'GeoCon.view.mydeal.ComposePanel',
        'GeoCon.view.mydeal.ActivitiesPanel'
    ],
    config: {
        layout: 'card',
        activeItem: 1,
        items: [{
            id: 'detailpanel',
            xclass: 'GeoCon.view.mydeal.DetailPanel'
        }, {
            id: 'historypanel',
            xclass: 'GeoCon.view.mydeal.HistoryPanel'
        }, {
            id: 'editpanel',
            xclass: 'GeoCon.view.mydeal.EditPanel'
        }, {
            id: 'composepanel',
            xclass: 'GeoCon.view.mydeal.ComposePanel'
        }, {
            id: 'activitiespanel',
            xclass: 'GeoCon.view.mydeal.ActivitiesPanel'
        }]
    }
});
