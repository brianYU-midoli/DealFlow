Ext.define('GeoCon.view.deallog.HelperPanel', {
    extend: 'Ext.Carousel',
    xtype: 'helperpanel',
    config: {
        direction: 'vertical',
        defaults: {
            styleHtmlContent: true,
        },
        items: [{
            html: '<img src="resources/images/EOS-Helper01.png" alt="EOS-Helper01.png" />'
        }, {
            html: '<img src="resources/images/EOS-Helper02.png" alt="EOS-Helper02.png" />'
        }, {
            html: '<img src="resources/images/EOS-Helper03.png" alt="EOS-Helper03.png" />'
        }, {
            html: '<img src="resources/images/EOS-Helper04.png" alt="EOS-Helper04.png" />'
        }, {
            html: '<img src="resources/images/EOS-Helper05.png" alt="EOS-Helper05.png" />'
        }, {
            html: '<img src="resources/images/EOS-Helper06.png" alt="EOS-Helper06.png" />'
        }, {
            html: '<img src="resources/images/EOS-Helper07.png" alt="EOS-Helper07.png" />'
        }, {
            html: '<img src="resources/images/EOS-Helper08.png" alt="EOS-Helper08.png" />'
        }]
    }
});
