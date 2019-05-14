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
        drawAreaChart(chartData);
    });
});
function drawAreaChart(chartData) {
    var data = google.visualization.arrayToDataTable(chartData);
    var options = {
        title: "Category",
        pointSize: 5,
    };
    var areaChart = new google.visualization.AreaChart(document.getElementById('divAreaChart'));
    areaChart.draw(data, options);
}
google.load('visualization', '1', { packages: ['corechart'] });  