# casper-geolocation
![master](https://travis-ci.org/ybouhjira/casper-geolocation.svg?branch=master)

A Casper.js module for testing apps that use the geolocation API.
It allows control of the client's geolocation via a simple `setLocation()`
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

