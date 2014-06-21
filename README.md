# casper-geolocation
A Casper.js module for testing apps that use the geolocation API.
It allows control of the client's geolocation via a simple `setPos()`
function.

## how to use 
```javascript
var require = patchRequire(require)
  , casper = require('casper').create()
  , geo = require('casperjs-geolocation')(casper);

casper.start('http://site.com');

casper.then(function() {
  geo.setPos({latitude : 20, longitude:20});
});

casper.run();
```

