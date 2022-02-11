const request = require('request');
const express = require('express');
const server = express();
<<<<<<< HEAD
=======

>>>>>>> 3558e55d456fffb09bda36646e50a499923aafc0
function getYouTubeTrending() {
    //https://www.npmjs.com/package/request
    request('http://www.youtube.com/trending', function (error, response, body) {
        let trending = []
        let list = body.split(`"watchEndpoint":{"videoId":"`)
        
        for (var i = 0; i < list.length - 1; ++i) {
           
            var videoId = list[i].slice(0,11)
            var chunk = list[i].slice(list[i].length - 1500, list[i].length)
            var videoMeta = "{" + chunk.slice(chunk.indexOf(`"title"`), chunk.indexOf(`,"descriptionSnippet"`)) + "}"
            
            if (videoMeta.includes(`{"runs":[{"text"`)) {
                (videoMeta.slice(videoMeta.length - 4, videoMeta.length) != "}}}}") ?
                    trending.push(Object.assign(videoMeta.parse(videoMeta + "}"), {"videoId": videoId})) :
                    trending.push(Object.assign(videoMeta.parse(videoMeta), {"videoId": videoId}))
            }
        }
        server.listen(3000, () => {
            console.log("running")
            server.use("/", (req, res) => res.send(trending))
        })
    })
}

getYouTubeTrending();
