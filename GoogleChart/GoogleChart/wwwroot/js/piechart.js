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
        drawPieChart(chartData);
    });
});
function drawPieChart(chartData) {
    var data = google.visualization.arrayToDataTable(chartData);
    var options = {
        title: "Category",
        pointSize: 5,
        is3D: true
    };
    var pieChart = new google.visualization.PieChart(document.getElementById('divPieChart'));
    pieChart.draw(data, options);
}
google.load('visualization', '1', { packages: ['corechart'] });  