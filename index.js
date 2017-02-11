'use strict'

const API_URL = "http://netflixroulette.net/api/api.php?"

const queryStringPair = function(key, value) {
  return '&' + key + '=' + value
}

const fetch = (requestData) => new Promise((resolve, reject) => {
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
        reject("Input invalid: " + requestData)
    }

    var httpReq = new XMLHttpRequest()
    httpReq.open("GET", API_URL + queryString.replace(/\s/ig, "%20"), true)
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState !== 4) {
            return
        }
        if (httpReq.status !== 200) {
            reject("Unexpected HTTP status code: " + httpReq.status )
        }
        resolve(JSON.parse(httpReq.responseText))
    }
    httpReq.send()
})

exports = module.exports = fetch
