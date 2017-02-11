import fetch from './index.js';

// Examples

// Request by title
createRequest("Breaking Bad", function (resp) {
  console.log("Breaking Bad's response: " + JSON.stringify(resp, null, 2))
})

// Request by Actor
createRequest({'actor': 'Jim Carrey'}, function (resp) {
  console.log("Jim Carrey's movies: " + JSON.stringify(resp, null, 2))
})

// Request by Director
createRequest({'director': 'Tim Burton'}, function (resp) {
  console.log("Tim Burton's movies: " + JSON.stringify(resp, null, 2))
})
