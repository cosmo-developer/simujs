import ('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js')
onmessage = function(event) {
    const {canvas, config} = event.data;
    const chart = new Chart(canvas, config);
};