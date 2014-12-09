Ext.define('GeoCon.view.alldeal.MainPanel', {
    extend: 'Ext.Panel',
    requires: [
        'GeoCon.view.alldeal.DealLogList',
        'GeoCon.view.alldeal.DetailPanel',
        'GeoCon.view.alldeal.HistoryPanel',
        'GeoCon.view.alldeal.ComposePanel'
    ],
    config: {
        layout: 'card',
        activeItem: 0,
        items: [{
            //All Deal Log List
            id:'alldealloglist',
            xclass: 'GeoCon.view.alldeal.DealLogList'
        }, {
            //All Deal Log Detail
            id: 'alldetailpanel',
            xclass: 'GeoCon.view.alldeal.DetailPanel'
        }, {
            //All Deal Log History
            id: 'allhistorypanel',
            xclass: 'GeoCon.view.alldeal.HistoryPanel'
        }, {
            //All Deal Log Comments  
            id: 'allcomposepanel',
            xclass: 'GeoCon.view.alldeal.ComposePanel'
        }]
    }
});
