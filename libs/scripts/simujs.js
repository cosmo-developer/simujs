//Chart.defaults.datasets.line.showLine = true;
let chart = new Chart("plotter", {
  type: "scatter",
  data: {
    datasets: [
      {
        label: ["EquationGraph"],
        pointRadius: 0.5,
        pointBackgroundColor: "rgba(214, 32, 190,1)",
        data: [],
      },
    ],
  },
  options: {
    animation: false,
    x: {
      type: "time",
      min: -1,
      max: 1,
    },
    y: {
      type: "linear",
      min: 0,
      max: 100,
    },
    snapGaps:true,
  },
});

function evalchart() {
  xyValues = [];
  let equ = document.getElementsByClassName("equation").item(0);
  for (var t = 0; t <= 20; t += 0.0001) {
    xyValues.push({ x: t, y: eval(equ.value) });
  }
  chart.data.datasets[0].data = xyValues;
  chart.update();
}
