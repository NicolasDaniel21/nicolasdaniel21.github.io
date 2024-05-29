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

    urlDaily = "../queryPetr4.json";
  }
}

var apiKey = "g3ikPvgYzawWpp9LuXoh43";

urlDaily = "../queryPetr4.json";

const ctx = document.getElementById("bar_graph");

let labelsX = ["minimum", "average", "maximum"];

fetch("../queryPetr4.json")
  .then((response) => response.json())
  .then((data) => {
    const historicalData = data.results[0].historicalDataPrice;

    let dates = [],
      highPrices = [],
      lowPrices = [],
      openPrices = [],
      closePrices = [];

    let averagePrice = 0,
      highestPrice = -Infinity,
      lowestPrice = +Infinity;

    for (const dailyData of historicalData) {
      dates.push(convertUnixTimestampToDate(dailyData.date));
      highPrices.push(dailyData.high);
      lowPrices.push(dailyData.low);
      openPrices.push(dailyData.open);
      closePrices.push(dailyData.close);

      if (dailyData.high > highestPrice) {
        highestPrice = dailyData.high;
      }

      averagePrice += dailyData.close;

      if (dailyData.low < lowestPrice) {
        lowestPrice = dailyData.low;
      }
    }

    console.log("highestPrice = " + highestPrice);

    averagePrice = averagePrice / historicalData.length;
    console.log("Average price = " + averagePrice);

    console.log("Lowest price = " + lowestPrice);

    let valores = [lowestPrice, averagePrice, highestPrice];

    new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "High Prices",
            data: highPrices,
            borderColor: "green",
            fill: false,
          },
          {
            label: "Low Prices",
            data: lowPrices,
            borderColor: "red",
            fill: false,
          },
          {
            label: "Open Prices",
            data: openPrices,
            borderColor: "blue",
            fill: false,
          },
          {
            label: "Close Prices",
            data: closePrices,
            borderColor: "orange",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Price",
            },
          },
        },
      },
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));

function convertUnixTimestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
