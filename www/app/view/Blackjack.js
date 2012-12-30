Ext.define("BJ.view.Blackjack", {

    extend: 'Ext.Panel',
    
    config: {
        
        fullscreen: true,
        id: 'bjGameScreen', 
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Juego del Blackjack!!'
            }
        ]
        
    }
    
});
