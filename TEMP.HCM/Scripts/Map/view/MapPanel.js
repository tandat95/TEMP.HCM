Ext.define('HCMT.view.MapPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mappanel',
    layout: 'fit',
    params: {
        mapCenter: [106.674293, 10.772594],
        initialZoom: 10,
        canvas: {
            width: 850,
            height: 700,
            step: 6
        },
        resolution: 100,
        maxDataPoints: 501,
        kriging: {
            model: "exponential",
            sigma2: 0,
            alpha: 100
        },
        colorSpectrum: ["#006837", "#1a9850", "#66bd63", "#a6d96a", "#d9ef8b", "#ffffbf", "#fee08b", "#fdae61", "#f46d43", "#d73027", "#a50026"],
        colorBins: 100,
        maxResponse2: 37,
        maxResponse: Number.NEGATIVE_INFINITY,
        minResponse: 26
    },
    initComponent: function () {
        var me = this;
        me.items = [
            {
                layout: 'fit',
                id: 'mapContainer'
            }
        ]
        this.callParent();
    }
})