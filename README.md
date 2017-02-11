# netflixroulette-js
Netflixroulette js Promise wrapper

### What is this
- Low level http requests to netflixroulette API
- Zero dependency
- Returns a Promise
- Full API support - Search by Title, Year, Actor, Director

### Usage
Import module
```javascript
import netflix from 'netflixroulette-js';
```

Search by Title. This returns a single entry as per API
```javascript
netflix("Breaking Bad")
.then(function(response) {
        console.log("Breaking Bad: " + JSON.stringify(response, null, 2));
      }
).catch(function(error) {
    console.log("Error " +  error);
})
```

Search by Actor. This returns a set of entries, as per API
```javascript
netflix({'actor': 'jim carrey'})
.then(function(response) {
        console.log("Jim carrey's movies: " + JSON.stringify(response, null, 2));
      }
).catch(function(error) {
    console.log("Error " +  error);
})

```
### Other params
The request takes either a String (movie Title)
Or an Object containing 
- Title and year
or
- Director
- Actor


