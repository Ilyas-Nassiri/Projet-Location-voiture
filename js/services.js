



    // ------------ satrt statics ----------

    // Load google charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Dacia ', 'Hours per Day'],
    ['Mercedes', 8],
    ['Volkswagen', 2],
    ['Citroen', 2],
    ['Hyundai', 2],
    ['Dacia ', 2],
    ['Renault', 8]
    ]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Ou statics cars', 'width':500, 'height':200};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

// ------- start library AIOS.js

    AOS.init();





    

    