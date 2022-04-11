$(function(e) {
    'use strict'

    $(document).ready(function() {
        todayAnalysis();
        monthlyAnalysis();
      });


    function todayAnalysis() {
        // Today Analysis Transitions
        var todayAnalysisCanvas = document.getElementById("today_analysis_transactions");
        todayAnalysisCanvas.height = "330";
    
        var todayAnalysisCanvasContext = todayAnalysisCanvas.getContext("2d");
        var todayAnalysisGradientStroke1 = todayAnalysisCanvasContext.createLinearGradient(0, 80, 0, 280);
        todayAnalysisGradientStroke1.addColorStop(0, hexToRgba(myVarVal, 0.8) || 'rgba(108, 95, 252, 0.8)');
        todayAnalysisGradientStroke1.addColorStop(1, hexToRgba(myVarVal, 0.2) || 'rgba(108, 95, 252, 0.2) ');
    
        var todayAnalysisGradientStroke2 = todayAnalysisCanvasContext.createLinearGradient(0, 80, 0, 280);
        todayAnalysisGradientStroke2.addColorStop(0, hexToRgba(myVarVal1, 0.8) || 'rgba(5, 195, 251, 0.8)');
        todayAnalysisGradientStroke2.addColorStop(1, hexToRgba(myVarVal1, 0.8) || 'rgba(5, 195, 251, 0.2) ');
        document.getElementById('today_analysis_transactions').innerHTML = ''; 
        var todayAnalysisChart;
        todayAnalysisChart = new Chart(todayAnalysisCanvas, {
    
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
                type: 'line',
                datasets: [{
                    label: 'Total Sales',
                    data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210],
                    backgroundColor: todayAnalysisGradientStroke1,
                    borderColor: myVarVal,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: todayAnalysisGradientStroke1,
                    pointBorderColor: myVarVal,
                    pointHoverBorderColor: todayAnalysisGradientStroke1,
                    pointBorderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    fill: 'origin'
                }, {
                    label: 'Total Orders',
                    data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454],
                    backgroundColor: 'transparent',
                    borderColor: '#05c3fb',
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: todayAnalysisGradientStroke2,
                    pointBorderColor: '#05c3fb',
                    pointHoverBorderColor: todayAnalysisGradientStroke2,
                    pointBorderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    fill: 'origin',
    
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: false,
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false,
                    },
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                            color: 'rgba(119, 119, 142, 0.08)'
                        },
                        ticks: {
                            fontColor: '#b0bac9',
                            autoSkip: true,
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month',
                            fontColor: 'transparent'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 1050,
                            stepSize: 150,
                            fontColor: "#b0bac9",
                        },
                        display: true,
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            zeroLineColor: 'rgba(142, 156, 173,0.1)',
                            color: "rgba(142, 156, 173,0.1)",
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'sales',
                            fontColor: 'transparent'
                        }
                    }]
                },
                title: {
                    display: false,
                    text: 'Normal Legend'
                }
            }
        });
    };

    function monthlyAnalysis() {
            
        // Today Analysis Transitions
        var monthlyAnalysisCanvas = document.getElementById("monthly_analysis_transactions");
        monthlyAnalysisCanvas.height = "330";

        var monthlyAnalysisCanvasContext = monthlyAnalysisCanvas.getContext("2d");
        var monthlyAnalysisGradientStroke1 = monthlyAnalysisCanvasContext.createLinearGradient(0, 80, 0, 280);
        monthlyAnalysisGradientStroke1.addColorStop(0, hexToRgba(monthlyAnalysisVarVal, 0.8) || 'rgba(108, 95, 252, 0.8)');
        monthlyAnalysisGradientStroke1.addColorStop(1, hexToRgba(monthlyAnalysisVarVal, 0.2) || 'rgba(108, 95, 252, 0.2) ');

        var monthlyAnalysisGradientStroke2 = monthlyAnalysisCanvasContext.createLinearGradient(0, 80, 0, 280);
        monthlyAnalysisGradientStroke2.addColorStop(0, hexToRgba(monthlyAnalysisVarVal1, 0.8) || 'rgba(5, 195, 251, 0.8)');
        monthlyAnalysisGradientStroke2.addColorStop(1, hexToRgba(monthlyAnalysisVarVal1, 0.8) || 'rgba(5, 195, 251, 0.2) ');
        document.getElementById('monthly_analysis_transactions').innerHTML = ''; 
        var monthlyAnalysisChart;
        monthlyAnalysisChart = new Chart(monthlyAnalysisCanvas, {

            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
                type: 'line',
                datasets: [{
                    label: 'Total Sales',
                    data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210],
                    backgroundColor: monthlyAnalysisGradientStroke1,
                    borderColor: myVarVal,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: monthlyAnalysisGradientStroke1,
                    pointBorderColor: myVarVal,
                    pointHoverBorderColor: monthlyAnalysisGradientStroke1,
                    pointBorderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    fill: 'origin'
                }, {
                    label: 'Total Orders',
                    data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454],
                    backgroundColor: 'transparent',
                    borderColor: '#05c3fb',
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: monthlyAnalysisGradientStroke2,
                    pointBorderColor: '#05c3fb',
                    pointHoverBorderColor: monthlyAnalysisGradientStroke2,
                    pointBorderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    fill: 'origin',

                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: false,
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false,
                    },
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                            color: 'rgba(119, 119, 142, 0.08)'
                        },
                        ticks: {
                            fontColor: '#b0bac9',
                            autoSkip: true,
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month',
                            fontColor: 'transparent'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 1050,
                            stepSize: 150,
                            fontColor: "#b0bac9",
                        },
                        display: true,
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            zeroLineColor: 'rgba(142, 156, 173,0.1)',
                            color: "rgba(142, 156, 173,0.1)",
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'sales',
                            fontColor: 'transparent'
                        }
                    }]
                },
                title: {
                    display: false,
                    text: 'Normal Legend'
                }
            }
        });
    }
});

