Ext.define('Home.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.home-viewport',
    layout: 'border',
    initComponent: function () {
        var me = this;
        me.items = [
            {
                title: "West panel",
                region: 'west',
                width: 400,
                split: true,
                collapsible: true,
                hideCollapseTool: true,
                collapseMode: 'mini',
                collapsible: true,
                items: [{
                    xtype: 'button',
                    text: 'test'
                }]
            },
            {

                region: 'center',
                xtype: 'mappanel'
            }];

        this.callParent();
    }
})