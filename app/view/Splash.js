/**
* Splash screen
*/
Ext.define('GeoCon.view.Splash', {
    extend: 'Ext.Container',
    id: 'splashScreen',
    requires: [
        'GeoCon.view.splash.Login',
        'GeoCon.view.splash.Background',
        'GeoCon.view.splash.DealLog',
	    'GeoCon.view.splash.ChooseSystem',
        'GeoCon.view.splash.TaskAssign'
    ],

    config: {
        layout: {
            type: 'card'//,
            //animation: {
            //    type: 'flip'
            //}
        },
        items: [{
            // �n�J�e��
            xclass: 'GeoCon.view.splash.Login'
        }, {
            // �I���e��
            xclass: 'GeoCon.view.splash.Background'//setActiveItem(0)
        }, {
            // Choose System
            xclass: 'GeoCon.view.splash.ChooseSystem'//setActiveItem(1)
        }, {
            // DealLog
            xclass: 'GeoCon.view.splash.DealLog'//setActiveItem(2)
        }, {
            // TaskAssign
            xclass: 'GeoCon.view.splash.TaskAssign'//setActiveItem(3)      
        }]
    },

    animateTo: function (dir) {
        Ext.getCmp('viewport').getLayout().setAnimation({
            duration: 300,
            easing: 'ease-in-out',
            type: 'slide',
            direction: dir
        });
    }

});
