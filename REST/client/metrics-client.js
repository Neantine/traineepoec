// TODO que se passe t-il si on quitte la page ?
// TODO différencier les metrics "idle" des autres metrics ? flag idle sur l'objet ?

const API_BASE_URL = 'http://localhost:3000';

const METRICS_BUFFER_THRESHOLD = 10;
let metrics = [];

const MOUSE_IDLE_THRESHOLD = 2000;

let globalMouseIdleTimer;
let mousePositionX = null;
let mousePositionY = null;

function startMouseIdleTimer() {
    globalMouseIdleTimer = setInterval(() => {

        pushMetrics();

    }, MOUSE_IDLE_THRESHOLD);
}
function clearMouseIdleTimer() {
    clearInterval(globalMouseIdleTimer);
}
function pushMetrics() {
    if(mousePositionX == null && mousePositionY == null) {
        console.log("Can't push null mouse position", mousePositionX, mousePositionY);
        return;
    }

    const metric = {
        page : 'page-to-spy.html', // TODO grab the url directly from JavaScript
        user: 'user-123456789', // TODO sign in a user
        x: mousePositionX,
        y: mousePositionY,
        instant: Date.now()
    };

    console.log('Pushing metric', metric);

    metrics.push(metric);

    if(metrics.length === METRICS_BUFFER_THRESHOLD) {

        let metricsToSend = metrics.splice(0, METRICS_BUFFER_THRESHOLD);

        sendMetrics(metricsToSend);
    }
}
function sendMetrics(metricsToSend) {
    console.log('Sending metrics', metricsToSend);
    fetch(API_BASE_URL + '/metrics', {
        method: 'post',
        headers: {
            "Content-type": "application/json" //; charset=UTF-8 par defaut en JSON
        },
        body: JSON.stringify(metricsToSend)
    })
        .then((response) => {
            // console.log(response.status);
            // console.log(response.headers);
            //console.log(response.text()); // response.json()
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

startMouseIdleTimer();

window.addEventListener('mousemove', function(e) {

    clearMouseIdleTimer();

    mousePositionX = e.clientX;
    mousePositionY = e.clientY;

    pushMetrics();

    startMouseIdleTimer();

});



