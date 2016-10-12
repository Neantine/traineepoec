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

    $.ajax(API_BASE_URL + '/metrics', {method:'POST', headers: {
        "Content-type": "application/json"
    },
        data: JSON.stringify(metricsToSend),
        success: function(data, textStatus, jqXHR) {
            console.log(data, textStatus);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

}

startMouseIdleTimer();


$(window).mousemove( function(e)
{
    console.log('mouse moving');

    clearMouseIdleTimer();

    mousePositionX = e.clientX;
    mousePositionY = e.clientY;

    pushMetrics();

    startMouseIdleTimer();
});



