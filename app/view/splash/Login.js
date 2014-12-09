Ext.define('GeoCon.view.splash.Login', {
    extend: 'Ext.form.Panel',
    id: 'login',
    config: {
        modal: true,
        hideOnMaskTap: false,
        centered: true,
        height: 300,
        width: 600,
        items: [{
            xtype: 'fieldset',
            title: 'Welcome to EOS App',
            instructions: 'Version 1.0.7.8',
            defaults: {
                labelWidth: '25%'
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'Login'
            }, {
                xtype: 'textfield',
                id: 'LoginName',
                name: 'LoginName',
                label: 'Login Name'
            }, {
                xtype: 'passwordfield',
                id: 'PassWord',
                name: 'PassWord',
                label: 'Password'
            }]
        }, {
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
                    Ext.getCmp('LoginName').setValue('');
                    Ext.getCmp('PassWord').setValue('');
                }
            }, {
                text: 'Submit',
                handler: function () {
                    if (Ext.getCmp('login')) {
                        var _form = Ext.getCmp('login');
                        _form.submit({
                            url: Login_Url,
                            method: 'Post',
                            params: Ext.urlEncode(_form.getValues(true)),
                            success: function () {
                                //記錄使用者名稱(LoginName)
                                Name = Ext.getCmp('LoginName').getValue();
                                localStorage.LoginName = Name;
                                localStorage.PassWord = Ext.getCmp('PassWord').getValue();
                                //切換ChooseSystem
                                if (Ext.getCmp('splashScreen')) {
                                    Ext.getCmp('splashScreen').setActiveItem(1);
                                    _form.hide();
                                }
                            },
                            failure: function () {
                                Ext.Msg.alert('Login Failure', 'Please check Name & PassWord.', Ext.emptyFn)
                            }
                        });

                    }
                }
            }]
        }]
    }
});