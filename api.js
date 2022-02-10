const request = require('request');
const express = require('express');
const app = express();
const fs = require("fs")

function getYouTubeTrending() {
    request('http://www.youtube.com/trending', function (err, res, body) {
        //https://www.npmjs.com/package/request
        app.listen(3000, () => {
            console.log('listening')
            //fs.writeFile("foo.html",body, () => '')
            
            var str = body
            var regex = /"videoId"/g, result, indices = [];
            console.log(Array.from(body.matchAll(regex)));
            // while ( (result = regex.exec(str)) ) {
            //     indices.push(result.index);
            //     console.log(indices)
            // }
            //console.log(str.matchAll(regex))
           // console.log(indices)
            app.use('/', (req,res) => {
                
                // while (match= /{"label"/g.exec(body))
                //     indexes.push([match.index, match.index+match[0].length]);
                //console.log(body.substring( 318166, 318545,))
                res.send(body.substring(422566,422700))
            })
        })
    })
}
getYouTubeTrending();

