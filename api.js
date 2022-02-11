const request = require('request');
const express = require('express');
const server = express();

function getYouTubeTrending() {
    //https://www.npmjs.com/package/request
    request('http://www.youtube.com/trending', function (error, response, body) {
    //      http://www.youtube.com/trending > returns HTML body
        let trending = []
        let list = body.split(`"watchEndpoint":{"videoId":"`) // splitting by this value gives an even 99 segments of HTML,
        //all of which start with a video ID: www.youtube.com/watch?v=Dgdfglskndfg  <-
        
        for (var i = 0; i < list.length - 1; ++i) {
            //the video id is the first few chars of every element in this list.
            var videoId = list[i].slice(0,11)
            //each video's meta data is roughly the last 1500 chars of each element.
            var chunk = list[i].slice(list[i].length - 1500, list[i].length)
            var json = "{" + chunk.slice(chunk.indexOf(`"title"`), chunk.indexOf(`,"descriptionSnippet"`)) + "}"
            
            if (json.includes(`{"runs":[{"text"`)) {
                (json.slice(json.length - 4, json.length) != "}}}}") ?
                    trending.push(Object.assign(JSON.parse(json + "}"), {"videoId": videoId})) :
                    trending.push(Object.assign(JSON.parse(json), {"videoId": videoId}))

            }
        }

        server.listen(3000, () => {
            console.log("running")

            server.use("/", (req, res) => res.send(trending))
        })
    })
}

getYouTubeTrending();
