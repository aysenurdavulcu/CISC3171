window.onload=function(){
    var canvas = document.getElementById("Pie").getContext("2d");
    var myChart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: ["Henry St school for international studies", "University Neighborhood HS", "East Side Community School", "Forsyth Satellite Academy", "Marta Valle HS"
        , "Lower East Side Preparatory HS", "Cascades HS"],
            datasets: [{
                data: [404, 423, 402, 401, 433, 557, 418],
                backgroundColor: ["#edd5f0","#ebc5f0","#e4a4eb","#e298eb","#dc8ae6", "#d97be3", "#d96ae6"],
            }]
        },
        options: {
            title:{
                display: true,
                text: '2012 SAT MATH scores',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
    );
    var canvas = document.getElementById("bar").getContext("2d");
    var myChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ["BROOKLYN","MANHATTAN","BRONX","QUEENS","STATEN ISLAND"],
            datasets: [{
		// label: 'Water Consumption',
                data: [2240,1446,469,2353,1842],
                backgroundColor: ["#c79da5","#c98d98","#c27a87","#c46073","#c9425b","#c42341","#bf0b2c"],
            }]
        },
        options: {
            title:{
                display: true,
                text: '2011 Graduation Number by Borough',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

};