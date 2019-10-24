const request = require('request');

request.post({
    url: "http://localhost:1234/rpc",
    headers: {
        "Content-Type": "application/json"
    },
    body: {
        "jsonrpc": "2.0",
        "method": "house.GetHouses",
        "params": {},
        "id": 1
    },
    json: true
}, function (error, response, body) {
    if (error) {
        console.log(error);
    }
    if (response.statusCode === 200) {
        console.log(body);
    }
});

request.post({
    url: "http://localhost:1234/rpc",
    headers: {
        "Content-Type": "application/json"
    },
    body: {
        "jsonrpc": "2.0",
        "method": "house.GetHouse",
        "params": {Id: 1},
        "id": 6576
    },
    json: true
}, function (error, response, body) {
    if (error) {
        console.log(error);
    }
    if (response.statusCode === 200) {
        console.log(body);
    }
});
