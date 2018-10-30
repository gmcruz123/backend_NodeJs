const musicApi = require('./music');
const emoji = require('node-emoji');
const http = require('http');
const fs = require('fs');
const emojis = emoji.emojify('I :heart:  :musical_note:  !')
console.log(emojis)


http.createServer((request, response) => {
    if (request.method === 'GET') {

        switch (request.url) {
            case '/merengue':
                {
                    let json = JSON.stringify(musicApi.merengue())
                    response.end(json)
                }
                break;

            case '/salsa':
                {
                    let json = JSON.stringify(musicApi.salsa())
                    response.end(json)
                }
                break;

            case '/vallenato':
                {
                    let json = JSON.stringify(musicApi.vallenato())
                    response.end(json)
                }
                break;

            case '/reggaeton':
                {

                    let json = JSON.stringify(musicApi.reggaeton())
                    response.end(json)
                }
                break;

            default:
                {
                    response.end(JSON.stringify({
                        response: 'error'
                    }))
                }
                break;

        }
    }
}).listen(8080);
