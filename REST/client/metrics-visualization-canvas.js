
function giveMeAColor(x, totalMin, totalMax) {
    const colorMin = 0;
    const colorMax = 255;

    y = ((x - totalMin) / (totalMax - totalMin)) * (colorMax - colorMin) + colorMin;

    return y;
}

const MAX_TOTAL_ALLOWED = 6;

const metricsCache = [];
let timeStampSinceLastResult;

const ctx = document.getElementById('canvas').getContext('2d');
const heatmapimage = ctx.createImageData(400, 400);

var socket = io.connect('http://localhost');
socket.on('update data', function (data) {
    console.log(data);
    socket.emit('user-123456789/page-to-spy.html', pollMetrics());
});

function pollMetrics() {
    let resourceURL = 'http://localhost:3000/metrics/users/user-123456789/pages/page-to-spy.html';

    if(timeStampSinceLastResult) {
        resourceURL += `?from=${timeStampSinceLastResult}`;
    }

    $.getJSON(resourceURL, function(data) {

        timeStampSinceLastResult = Date.now();

        updateMetricsCacheWithNewData(data);
        updateMetricsRepresentation();

    });

    setTimeout(pollMetrics, 1000); // poll for new data every 1s
}

pollMetrics();

function updateMetricsCacheWithNewData(newMetrics) {
    newMetrics.forEach(d => {

        let dataFoundInCache = metricsCache.find(cd => {
            return (cd.x === d.x) && (cd.y === d.y)
        });

        if(dataFoundInCache) {
            dataFoundInCache.total += d.total;
        } else {
            metricsCache.push(d);
        }
    });
}

function updateMetricsRepresentation() {

    const sortedData = metricsCache.sort((d1,d2) => { return d1.total - d2.total; });

    const min = sortedData[0].total;
    const max = Math.min(sortedData[sortedData.length - 1].total, MAX_TOTAL_ALLOWED);

    //draw circles from metricsCache
    metricsCache.forEach(d => {

        ctx.putImageData(heatmapimage, d.x,d.y);

        // ctx.beginPath();
        // ctx.moveTo(d.x,d.y);
        // ctx.arc(d.x, d.y, 5, 0, Math.PI*2, true);
        // var color = Math.floor(giveMeAColor(Math.min(d.total, MAX_TOTAL_ALLOWED), min, max));
        // ctx.fillStyle = "#"+color.toString(16);
        // console.log('element color ', "#"+color.toString(16));
        // ctx.fill();
        // ctx.stroke();

    })

    //ctx.drawImage(heatmapimage);




}
