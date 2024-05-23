var stock = "PETR4";

/* Area to validate the form */

var apiKey = "695FRTH84RDJMAGE";
var urlDaily = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}.SA&interval=5min&apikey=${apiKey}`;

/* Area to do the search logic of the stocks */

const ctx = document.getElementById('grafico1');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
        }]
    }
})