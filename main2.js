var request = require("request");
var EventEmitter = require("events").EventEmitter;
var body = new EventEmitter();

function get() {
    request("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b506a06468994fcc9ed9f55451000921", function(error, response, data) {
        body.data = data;
        body.emit('update');
    });

    body.on('update', function () {
        console.log(body.data); // HOORAY! THIS WORKS!
    });
}

get();