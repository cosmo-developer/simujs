//Chart.defaults.datasets.line.showLine = true;
let chart=new Chart("plotter", {
  type: "scatter",
  data: {
    datasets: [
      {
        label:["Unfiro"],
        pointRadius: 1,
        pointBackgroundColor: "rgba(214, 32, 190,1)",
        data: [],
      },
    ],
  },
  options: {},
});



function evalchart(){
    xyValues=[]
    let equ=document.getElementsByClassName("equation").item(0)
    for (var t=-1;t<=1;t+=0.001){
        xyValues.push({x:t,y:eval(equ.value)})
    }
    chart.data.datasets[0].data=xyValues
    chart.update();
}