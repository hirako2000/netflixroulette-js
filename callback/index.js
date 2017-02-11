'use strict'

const API_URL = "http://netflixroulette.net/api/api.php?"

const queryStringPair = function(key, value) {
  return '&' + key + '=' + value
}

var fetch = function (requestData, callback) {
    if (typeof callback !== 'function') {
        throw new Error("The callback parameter was not a function")
    }
    var queryString = "type=json"
    if (typeof requestData === 'string') {
        queryString += queryStringPair('title', requestData)
    } else if (typeof requestData === 'object') {
        if(requestData.hasOwnProperty('title')) {
          queryString += queryStringPair('title', requestData.title)
        }
        if(requestData.hasOwnProperty('year')) {
          queryString += queryStringPair('year', requestData.year)
        }
        if(requestData.hasOwnProperty('director')) {
          queryString += queryStringPair('director', requestData.director)
        }
        if(requestData.hasOwnProperty('actor')) {
          queryString += queryStringPair('actor', requestData.actor)
        }
    } else {
        throw new Error("I don't know how to handle " + requestData)
    }

    var httpReq = new XMLHttpRequest()
    httpReq.open("GET", API_URL + queryString.replace(/\s/ig, "%20"), true)
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState !== 4) {
            return
        }

        if (httpReq.status !== 200) {
            throw new Error("Unexpected HTTP Status Code (" + httpReq.status + ")")
        }

        callback(JSON.parse(httpReq.responseText))
    }
    httpReq.send()
}

exports = module.exports = fetch
