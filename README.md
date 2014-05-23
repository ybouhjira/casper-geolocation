# casperjs-geolocation
A Casper.js module for testing apps that use the geolocation API

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

