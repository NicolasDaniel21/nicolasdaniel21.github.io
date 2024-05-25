var standartStock = "PETR4";

function validate() {
  var selectedStock = document.getElementById("txtstandartStock").value;
  standartStock = selectedStock;

  if (selectedStock === undefined || standartStock == null) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = "Código de ação inválido!";
    document.getElementById("txtstandartStock").focus();
  } else {
    document.getElementById("error").style.display = "none";
    lineChartData = [["", 0, 0]];
    standartStock = selectedStock;
    urlDaily = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${standartStock}.SA&interval=5min&apikey=${apiKey}`;
    requestData(urlDaily);
  }
}

var apiKey = "695FRTH84RDJMAGE";

var urlDaily = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${standartStock}.SA&interval=5min&apikey=${apiKey}`;

const ctx = document.getElementById("bar_graph");

let labelsX = ["minimum", "average", "maximum"];
let valores = [0, 0, 0];

fetch(urlDaily)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(urlDaily);
    console.log(data);

    const timeSeries = data["Time Series (Daily)"];

    console.log(timeSeries);

    for (const date in timeSeries) {
      if (Object.hasOwnProperty.call(timeSeries, date)) {
        dailyData = timeSeries[date];
        console.log(`Date: ${date}`);
        console.log(`Open: ${dailyData["1. open"]}`);
        console.log(`High: ${dailyData["2. high"]}`);
        console.log(`Low: ${dailyData["3. low"]}`);
        console.log(`Close: ${dailyData["4. close"]}`);
        console.log(`Volume: ${dailyData["5. volume"]}`);
      }
    }

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labelsX,
        datasets: [
          {
            label: "# of votes",
            data: valores,
            borderWidth: 1,
          },
        ],
      },
    });
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
