{
    type: 'angulargauge',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Customer Satisfaction Score",
            "subcaption": "Last week",
            "lowerLimit": "0",
            "upperLimit": "100",
            "showGaugeBorder": "1",
            "gaugeBorderColor": "#111111",
            "gaugeBorderThickness": "1",
            "gaugeBorderAlpha": "100",
            "showValue": "1",
            "valueBelowPivot": "1",
            "theme": "fint"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
            }]
        },
        "dials": {
            "dial": [{
                "value": "67"
            }]
        }
    }
}
