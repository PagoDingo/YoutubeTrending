const request = require('request');
const express = require('express');
const server = express();
const fs = require("fs");
const { append } = require('express/lib/response');

function getYouTubeTrending() {
    //https://www.npmjs.com/package/request
    request('http://www.youtube.com/trending', function (error, response, body) {
        
        let list = body.split(`"watchEndpoint":{"videoId":`)

        let trending = []
            for (var i = 0; i < list.length - 1; ++i) {
                 //videoId
                 //if(i != 0) 
                // {console.log(list[i].slice(0,13));}
                 //videoInfo
                 
                  var chunk = list[i].slice(list[i].length - 1500, list[i].length)
                 
                   var json = "{" + chunk.slice(chunk.indexOf(`"title"`),chunk.indexOf(`,"descriptionSnippet"`)) + "}"
                   if (json.includes(`{"runs":[{"text"`)){
                    if (json.slice(json.length - 4, json.length) != "}}}}"){
                        trending.push(JSON.parse(json + "}"))
                    } else {
                        trending.push(JSON.parse(json))
                    }

                   }
            }
       

            server.listen(3000, () => {
                console.log("running")

                server.use("/",(req,res) => {
                    //res.send(JSON.parse(json))
                    res.send(trending)
                })
            })
        }
    )}
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
            