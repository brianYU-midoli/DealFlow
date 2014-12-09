Ext.define('GeoCon.store.MyTaskCMListStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'GeoCon.model.CommentsList',
        proxy: {
            type: 'jsonp',
            url: TaskAssign_Url,
            extraParams: {
                actiontype: 'Command',
                TaskID: ''
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
