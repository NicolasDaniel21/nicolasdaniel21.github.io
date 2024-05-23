var stock = "PETR4.SA";

/* Area to validate the form */

var apiKey = "695FRTH84RDJMAGE";
var urlDaily = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&interval=5min&apikey=${apiKey}`;

/* Area to do the search logic of the stocks */