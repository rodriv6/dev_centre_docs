{
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Bakersfield Central",
            "subCaption": "Online Purchase",
            "showrealtimevalue": "1",
            "borderAlpha": "0",
            "yaxismaxvalue": "10",
            "numdisplaysets": "10",
            "usePlotGradientColor": "0",
            "canvasBorderAlpha": "20",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "plotBorderAlpha": "0",
            "bgAlpha": "0",
            "showValues": "0",
            "numbersuffix": " Transactions",
            "showlabels": "1",
            "animation": "0",
            "showRealTimeValue": "0"
        },
        "categories": [{
            "category": [{
                "label": "8 mins ago"
            }, {
                "label": "7 mins ago"
            }, {
                "label": "6 mins ago"
            }, {
                "label": "5 mins ago"
            }, {
                "label": "4 mins ago"
            }, {
                "label": "3 mins ago"
            }, {
                "label": "2 mins ago"
            }, {
                "label": "1 min ago"
            }]
        }],
        "dataset": [{
            "seriesname": "",
            "alpha": "100",
            "data": [{
                "value": "5"
            }, {
                "value": "7"
            }, {
                "value": "1"
            }, {
                "value": "5"
            }, {
                "value": "5"
            }, {
                "value": "2"
            }, {
                "value": "4"
            }, {
                "value": "3"
            }]
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var chartRef = evt.sender,
                //Format minutes, seconds by adding 0 prefix accordingly
                formatTime = function(time) {
                    (time < 10) ? (time = "0" + time) : (time = time);
                    return time;
                },
                updateData = function() {

                    //Get reference to the chart using its ID
                    // var chartRef = FusionCharts("mychart");
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    var currDate = new Date(),
                        label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                        //Get random number between 1 & 4 - rounded
                        transactions = Math.round(Math.random() * 4) + 1,
                        strData = "&label=" + label + "&value=" + transactions;

                    //Feed it to chart.
                    chartRef.feedData(strData);
                };
                chartRef.intervalUpdate = setInterval(function() {
                    updateData();
                }, 5000);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.intervalUpdate);
        }

    }
}
