$(function(e) {
    'use strict'


    var dom1 = document.getElementById("long-metter-graph--1");
    var longmeterGraphChart1 = echarts.init(dom1);
    var app = {};
    
    var option1;
    
    
    const gaugeData1 = [
        {
            value: 40,
            title: {
                offsetCenter: ['0%', '80%']
            },
            detail: {
                offsetCenter: ['0%', '95%']
            }
        },
        {
            value: 60,
            title: {
                offsetCenter: ['40%', '80%']
            },
            detail: {
                offsetCenter: ['40%', '95%']
            }
        }
    ];
    option1 = {
        series: [
            {
                type: 'gauge',
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 10,
                    itemStyle: {
                        color: '#FAC858'
                    }
                },
                pointer: {
                    icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                    width: 3,
                    length: '80%',
                    offsetCenter: [0, '8%']
                },
                progress: {
                    width: 5,
                    show: true,
                    overlap: true,
                    roundCap: true
                },
                axisLine: {
                    roundCap: true,
                    width: 5,
                },
                data: gaugeData1,
                title: {
                    fontSize: 6
                },
                detail: false,
                    color: ['#5c3c37', '#fd6a42', '#fd6a42']
                }
            ]
        };
        setInterval(function () {
        gaugeData1[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData1[1].value = +(Math.random() * 100).toFixed(2);
        longmeterGraphChart1.setOption({
            series: [
                { data: gaugeData1 }
            ]
        });
    }, 2000);

    if (option1 && typeof option1 === 'object') {
        longmeterGraphChart1.setOption(option1);
    }


    // LONG METER 2
    var dom2 = document.getElementById("long-metter-graph--2");
    var longmeterGraphChart2 = echarts.init(dom2);
    var app = {};
    var option2;
    const gaugeData2 = [
        {
            value: 40,
            title: {
                offsetCenter: ['0%', '80%']
            },
            detail: {
                offsetCenter: ['0%', '95%']
            }
        },
        {
            value: 60,
            title: {
                offsetCenter: ['40%', '80%']
            },
            detail: {
                offsetCenter: ['40%', '95%']
            }
        }
    ];
    option2 = {
        series: [
            {
                type: 'gauge',
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 10,
                    itemStyle: {
                        color: '#FAC858'
                    }
                },
                pointer: {
                    icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                    width: 3,
                    length: '80%',
                    offsetCenter: [0, '8%']
                },
                progress: {
                    width: 5,
                    show: true,
                    overlap: true,
                    roundCap: true
                },
                axisLine: {
                    roundCap: true,
                    width: 5,
                },
                data: gaugeData2,
                title: {
                    fontSize: 6
                },
                detail: false,
                    color: ['#5c3c37', '#fd6a42', '#fd6a42']
                }
            ]
        };
        setInterval(function () {
        gaugeData2[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData2[1].value = +(Math.random() * 100).toFixed(2);
        longmeterGraphChart2.setOption({
            series: [
                { data: gaugeData2 }
            ]
        });
    }, 2000);

    if (option2 && typeof option2 === 'object') {
        longmeterGraphChart2.setOption(option2);
    }
    

    // LONG METER 3
    var dom3 = document.getElementById("long-metter-graph--3");
    var longmeterGraphChart3 = echarts.init(dom3);
    var app = {};
    var option3;
    const gaugeData3 = [
        {
            value: 40,
            title: {
                offsetCenter: ['0%', '80%']
            },
            detail: {
                offsetCenter: ['0%', '95%']
            }
        },
        {
            value: 60,
            title: {
                offsetCenter: ['40%', '80%']
            },
            detail: {
                offsetCenter: ['40%', '95%']
            }
        }
    ];
    option3 = {
        series: [
            {
                type: 'gauge',
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 10,
                    itemStyle: {
                        color: '#FAC858'
                    }
                },
                pointer: {
                    icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                    width: 3,
                    length: '80%',
                    offsetCenter: [0, '8%']
                },
                progress: {
                    width: 5,
                    show: true,
                    overlap: true,
                    roundCap: true
                },
                axisLine: {
                    roundCap: true,
                    width: 5,
                },
                data: gaugeData3,
                title: {
                    fontSize: 6
                },
                detail: false,
                    color: ['#5c3c37', '#fd6a42', '#fd6a42']
                }
            ]
        };
        setInterval(function () {
        gaugeData3[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData3[1].value = +(Math.random() * 100).toFixed(2);
        longmeterGraphChart3.setOption({
            series: [
                { data: gaugeData3 }
            ]
        });
    }, 2000);

    if (option3 && typeof option3 === 'object') {
        longmeterGraphChart3.setOption(option3);
    }
    

    // LONG METER 4
    var dom4 = document.getElementById("long-metter-graph--4");
    var longmeterGraphChart4 = echarts.init(dom4);
    var app = {};
    var option4;
    const gaugeData4 = [
        {
            value: 40,
            title: {
                offsetCenter: ['0%', '80%']
            },
            detail: {
                offsetCenter: ['0%', '95%']
            }
        },
        {
            value: 60,
            title: {
                offsetCenter: ['40%', '80%']
            },
            detail: {
                offsetCenter: ['40%', '95%']
            }
        }
    ];
    option4 = {
        series: [
            {
                type: 'gauge',
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 10,
                    itemStyle: {
                        color: '#FAC858'
                    }
                },
                pointer: {
                    icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                    width: 3,
                    length: '80%',
                    offsetCenter: [0, '8%']
                },
                progress: {
                    width: 5,
                    show: true,
                    overlap: true,
                    roundCap: true
                },
                axisLine: {
                    roundCap: true,
                    width: 5,
                },
                data: gaugeData4,
                title: {
                    fontSize: 6
                },
                detail: false,
                    color: ['#5c3c37', '#fd6a42', '#fd6a42']
                }
            ]
        };
        setInterval(function () {
        gaugeData4[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData4[1].value = +(Math.random() * 100).toFixed(2);
        longmeterGraphChart4.setOption({
            series: [
                { data: gaugeData4 }
            ]
        });
    }, 2000);

    if (option4 && typeof option4 === 'object') {
        longmeterGraphChart4.setOption(option4);
    }
   
});

