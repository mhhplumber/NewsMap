var rp = require('request-promise');
// var XMLHttpRequest = require("xmlhttprequest");

var cheerio = require('cheerio'); // Basically jQuery for node.js

// var options = {
//     uri: 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b506a06468994fcc9ed9f55451000921',
//     transform: function (body) {
//         return cheerio.load(body);
//     }
// };

// rp(options)
//     .then(function (err, response, body) {
//         console.log(body);
//     })
//     .catch(function (err) {
//         // Crawling failed or Cheerio choked...
//     });

// console.log('Here');
// var options = {
//     uri: 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b506a06468994fcc9ed9f55451000921',
//     json: true // Automatically stringifies the body to JSON
// };

// myJson = rp(options).then(function (body) {
//     console.log(body);
//     myJson = body;
//     return body;
// });

// function callback(data) {
//     myJson = data;
// }

// function parse(parsedBody, callback) {
//         // console.log(parsedBody);
//         callback(parsedBody);
//     }

// console.log(myJson);

// function foo() {
//     var httpRequest = require("xmlhttprequest");
//     httpRequest.open('GET', "/echo/json");
//     httpRequest.send();
//     return httpRequest.responseText;
// }

// var result = foo(); // always ends up being 'undefined'

var http = require('request-promise-json');

var myJson = {};

// myJson = http.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b506a06468994fcc9ed9f55451000921');

function one(body) {
    alert(body);
}

function two(body, callback) {
    myJson = body;
}

// two("Here", one);

http.request({
    url: 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b506a06468994fcc9ed9f55451000921',
    json : true
}).then( function(body) {
    console.log(body);
});


console.log('I need an adult');
console.log(myJson);