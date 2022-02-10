const request = require('request');
const express = require('express');
const server = express();
const fs = require("fs")

function getYouTubeTrending() {
    //https://www.npmjs.com/package/request
    request('http://www.youtube.com/trending', function (error, response, body) {
        
        let list = body.split(`"watchEndpoint":{"videoId":`)

        // for (var i = 0; i < list.length - 1; ++i){
        //     let chunk = list[i].slice(list[i].length - 1500, list[i].length)
        //     //videoId
        //     if(i != 0) 
        //     {console.log(list[i].slice(0,13));}
        //     //videoInfo
        //     console.log(chunk.slice(chunk.indexOf(`"title"`),chunk.indexOf(`,"descriptionSnippet"`)))
        // }
        
        //start server
        server.listen(3000, () => {
            console.log('server running')
    
            
            server.use('/', (req,res) => {
                let chunk = list[1].slice(list[1].length - 1500, list[1].length)
                res.send(JSON.parse("{" + chunk.slice(chunk.indexOf(`"title"`),chunk.indexOf(`,"descriptionSnippet"`)) + "}"))
            })
        })
})}
getYouTubeTrending();

//         fs.writeFile("foo.html",body, () => '')
    //         // while (match= /{"label"/g.exec(body))
    //         //     indexes.push([match.index, match.index+match[0].length]);
    //         //console.log(body.substring( 318166, 318545,))
    //         // while ( (result = regex.exec(str)) ) {
    //         //     indices.push(result.index);
    //         //     console.log(indices)
    //         // }
    //         //console.log(str.matchAll(regex))
    //         // console.log(indices)
    //        let list = body.split(`"watchEndpoint":{"videoId":`)
    //        // "watchEndpoint":{"videoId"
            
    //         list.forEach(element => {
    //             console.log(element.slice(0,500));
    //         });
    //     //        console.log(i)
    //     //    }
    //         //console.log(Array.from(body.matchAll(regex)));
            