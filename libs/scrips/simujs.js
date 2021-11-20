let chart=new Chart("plotter", {
  type: "scatter",
  data: {
    datasets: [
      {
        pointRadius: 1,
        pointBackgroundColor: "rgba(0,0,255,1)",
        data: [],
      },
    ],
  },
  options: {},
});

function evalchart(){
    xyValues=[]
    let equ=document.getElementsByClassName("equation").item(0)
    for (var t=0;t<=1;t+=0.001){
        xyValues.push({x:t,y:eval(equ.value)})
    }
    chart.data.datasets[0].data=xyValues
}