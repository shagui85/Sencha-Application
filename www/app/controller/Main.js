Ext.define("BJ.controller.Main", {

    extend: 'Ext.app.Controller',
    
    config: {
        
        refs: {
            playButton: '#playButton',
            bjGameScreen: '#bjGameScreen'
        },
        
        control: {
            playButton: {
                tap: 'setBJGameScreen'
            }
        }
    },
    
    setBJGameScreen: function()
    {
        Ext.Viewport.animateActiveItem( this.getBjGameScreen(), {type: 'pop'});
    }
    
});
