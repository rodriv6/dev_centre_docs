{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales Figures for Top Three Juice Flavors",
            "subCaption": "2014",
            "xAxisName": "Flavor",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Apple",
            "value": "810000",
            "link": "j-showAlert-Apple,$810K"
        }, {
            "label": "Cranberry",
            "value": "620000",
            "link": "j-showAlert-Cranberry,$620K"
        }, {
            "label": "Grapes",
            "value": "350000",
            "link": "j-showAlert-Grapes,$350K"
        }]
    },
    events: {
        'dataplotClick': function(evt, args) {
            window.showAlert  = function(str){
                var arr = str.split(",");    
                alert("[Example for the 'j-' prefix] \n" + arr[0] + " juice sales for the last year: " + arr[1]);
            };
        }
    }
}
