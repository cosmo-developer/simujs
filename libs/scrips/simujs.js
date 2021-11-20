var xyValues = [];

for (var i=0;i<=1;i+=0.001){
    xyValues.push({x:i,y:Math.sin(2*Math.PI*1*i)})
}

let chart=new Chart("plotter", {
  type: "scatter",
  data: {
    datasets: [
      {
        pointRadius: 1,
        pointBackgroundColor: "rgba(0,0,255,1)",
        data: xyValues,
      },
    ],
  },
  options: {},
});

function evalchart(){
    console.log("Everything")
}