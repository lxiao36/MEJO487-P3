var fileName = "roster.json";
$(document).ready(function () {
  console.log("loaded");
  loadData();
});

function loadData() {
  console.log("loadData loaded");

  $.ajax({
    type: "GET",
    url: "data/" + fileName,
    dataType: "json",
    success: function (data) {
      console.log(data);
      playerChart(data);
    },
    error: function (error) {
      console.error("Error loading JSON file:", error);
    },
  });
}

function playerChart(rosterData) {
  console.log(rosterData);

  var labels = rosterData.roster.map(function (e) {
    return e.name;
  });

  var hits = rosterData.roster.map(function (e) {
    return e.hits;
  });

  console.log(labels);

  const ctx = document.getElementsById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: hits,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
