var xData = function () {
    var data = [];
    for (var i = 1; i < 11; i++) {
        data.push(2003 + i);
    }
    return data;
}();
option1 = {
    backgroundColor: "#344b58",
    "title": {
        "text": "All Energy Consumption By Sectors",
        "subtext": "BY Carmen Chan",
        x: "4%",
        y: "0%",

        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '50%',
        top: '10%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['Residential', 'Commercial', 'Industrial', 'Transport', 'Total']
    },


    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "name": "Terajoule",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c"


    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
        "name": "Residential",
        "type": "bar",
        "stack": "Total",
        "barMaxWidth": 35,
        "barGap": "10%",
        "itemStyle": {
            "normal": {
                "color": "rgba(0, 153, 204,1)",
                "label": {
                    "show": true,
                    "textStyle": {
                        "color": "#fff"
                    },
                    "position": "insideTop",
                    formatter: function (p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
        "data": [53053, 54759, 53982, 54717, 55849, 57731, 58396, 59544, 60888, 59459, 62958],
    }, {
        "name": "Commercial",
        "type": "bar",
        "stack": "Total",
        "barMaxWidth": 50,
        "barGap": "10%",
        "itemStyle": {
            "normal": {
                "color": "rgba(255, 153, 0,1)",
                "label": {
                    "show": true,
                    "textStyle": {
                        "color": "#fff"
                    },
                    "position": "insideTop",
                    formatter: function (p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
        "data": [105800, 107281, 111884, 113914, 113753, 114297, 116391, 117663, 119843, 119965, 121480],
    }, {
        "name": "Industrial",
        "type": "bar",
        "stack": "Total",
        "barMaxWidth": 35,
        "barGap": "10%",
        "itemStyle": {
            "normal": {
                "color": "rgba(153, 102, 51,1)",
                "label": {
                    "show": true,
                    "textStyle": {
                        "color": "#fff"
                    },
                    "position": "insideTop",
                    formatter: function (p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
        "data": [20686, 19809, 18934, 17645, 17332, 16129, 16053, 14735, 14727, 14588, 14723],
    },

    {
        "name": "Transport",
        "type": "bar",
        "stack": "Total",
        "itemStyle": {
            "normal": {
                "color": "rgba(0,191,183,1)",
                "barBorderRadius": 0,
                "label": {
                    "show": true,
                    "position": "top",
                    formatter: function (p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
        "data": [100776, 98689, 96404, 96165, 94504, 90643, 90889, 90774, 90423, 90198, 89999]
    }, {
        "name": "Total",
        "type": "line",
        "stack": "Total",
        symbolSize: 10,
        symbol: 'circle',
        "itemStyle": {
            "normal": {
                "color": "rgba(252,230,48,1)",
                "barBorderRadius": 0,
                "label": {
                    "show": true,
                    "position": "top",
                    formatter: function (p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
        "data": [280315, 280537, 281204, 282440, 281438, 278799, 281729, 282716, 285881, 284210, 289160]
    },
    ]
}

var myChart = echarts.init(document.getElementById('graph1'));
myChart.setOption(option1);

$(function () {
    $.getJSON('option2.json', function (data) {
        var option2 = data;
        var myChart2 = echarts.init(document.getElementById('graph2'));
        myChart2.setOption(option2);
    })
});