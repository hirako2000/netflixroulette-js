import fetch from './index.js'

/*** Examples ***/

// Request by title
fetch("Breaking Bad")
  .then(function(response) {
    console.log(JSON.stringify(response))
  }).catch(function(error) {
    console.log("Error " + error)
  })

// Request by actor
fetch({
    'actor': 'Jim Carrey'
  })
  .then(function(response) {
    console.log(JSON.stringify(response))
  }).catch(function(error) {
    console.log("Error " + error)
  })

// Request by director
fetch({
    'director': 'Tim Burton'
  })
  .then(function(response) {
    console.log(JSON.stringify(response))
  }).catch(function(error) {
    console.log("Error " + error)
  })
