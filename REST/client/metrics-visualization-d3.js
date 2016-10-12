
const MAX_TOTAL_ALLOWED = 6;
const MAX_UPDATE_TIME = 1000;

const svg = d3.select("body").append("svg").attr("width", 400).attr("height", 400);

function updateVisual(timestamp)
{

    // TODO
    // recuperer uniquement les données depuis la dernière demande d'aggregation ?
// GET http://localhost:3000/metrics/users/user-123456789/pages/page-to-spy.html?from=timestamp
    // [{x, y, total}]

    // fetch aggregates since instant
    // => [{x, y, total}] => a sommer avec la valeur précédemment accumuler
    let url = 'http://localhost:3000/metrics/users/user-123456789/pages/page-to-spy.html';

    if (timestamp != undefined)
    {
        url = 'http://localhost:3000/metrics/users/user-123456789/pages/page-to-spy.html?from='+timestamp;
        console.log('URL: ', url);
    }

    timestamp = Date.now();

    d3.json(url,

        function(data) {

            //console.log("TIMESTAMP NOW: ", timestamp);

            const sortedData = data.sort((d1, d2) => {
                return d1.total - d2.total;
            });

            const min = d3.min(sortedData, function (d) {
                return d.total
            });

            const max = d3.max(sortedData, function (d) {
                return d.total
            });

            const colorScale = d3.scaleLinear()
                .domain([min, Math.min(max, MAX_TOTAL_ALLOWED)])
                .range(["#000000", "#FF0000"]);

            svg.selectAll("circle").remove();

            svg.selectAll("circle").data(sortedData).enter().append('circle').attr("cx", function (d) {
                return d.x
            })
                .attr("cy", function (d) {
                    return d.y
                })
                .attr("r", function (d) {
                    return 5
                })
                .style("fill", function (d) {
                    return colorScale(Math.min(d.total, MAX_TOTAL_ALLOWED))
                });
        })

    //console.log("TIMESTAMP: ", timestamp);
    setTimeout(updateVisual(timestamp), MAX_UPDATE_TIME);
}


updateVisual();





