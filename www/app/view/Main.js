Ext.define("BJ.view.Main", {
    
    extend: 'Ext.tab.Panel',

    config: {
        
        tabBarPosition: 'bottom',

        items: [
            //Pantalla de introduccion
            {
                title: 'Intro',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Bienvenido al Blackjack'
                },

                html: [
                    "Pantalla de Bienvenida",
                ].join("")
            },
            //Pantalla de menu
            {
                title: 'Menu',
                iconCls: 'more',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Menu'
                    },
                    {
                        xtype: 'button',
                        id: 'playButton', 
                        centered: true,
                        text: 'Jugar'
                    }
                ]
            },
            //Pantalla de Ayuda
            {
                title: 'Ayuda',
                iconCls: 'info',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Instrucciones'
                },

                html: [
                    "Pantalla de instrucciones",
                ].join("")
            },
            //Pantalla de Terminos y condiciones
            {
                title: 'Términos',
                iconCls: 'star',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Términos y Condiciones'
                },

                html: [
                    "Pantalla de términos y condiciones",
                ].join("")
            }
        ]
    }
});

