$(document).ready(function () {
    //Load Data 
    var chartData = null;
    $.ajax({
        url: '/api/v1/columnchart',
        type: 'GET',
        dataType: 'json',
        data: '',
        success: function (d) {
            chartData = d;
        },
        error: function () {
            alert('Error!');
        }
    }).done(function () {
        drawLineChart(chartData);
    });
});
function drawLineChart(d) {
    var chartData = d;
    var data;
    data = google.visualization.arrayToDataTable(chartData);
    var view = new google.visualization.DataView(data);
    view.setColumns([0, {
        type: 'number',
        label: data.getColumnLabel(0),
        calc: function () {
            return 0;
        }
    }
    ]);
    var chart = new google.visualization.LineChart($('#divLineChart')[0]);
    var options = {
        title: 'Sales Report',
        legend: 'bottom',
        colors: ['blue', '#009900'],
        hAxis: {
            title: 'Category',
            format: '#',
           

        },
        vAxis: {
            minValue: 0,
            maxValue: 100000,
            title: 'Amount'
        },
        chartArea: {
            left: 100,
            top: 50,
            width: '70%',
            height: '50%'
        },
        animation: {
            duration: 1000
        },
    };
    var runFirstTime = google.visualization.events.addListener(chart, 'ready', function () {
        google.visualization.events.removeListener(runFirstTime);
        chart.draw(data, options);
    });
    chart.draw(view, options);
}
google.load('visualization', '1', { packages: ['corechart'] });