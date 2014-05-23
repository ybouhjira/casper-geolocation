# casperjs-geolocation
A Casper.js module for testing apps that use the geolocation API

## how to use 
```javascript
var require = patchRequire(require)
  , casper = require('casper').create()
  , geo = require('casperjs-geolocation');

casper.start('http://site.com');

var geo, pos = {latitude : 12, longitude : 12};
casper.on('page.initialized', function() {
  geo = new Geolocation(casper, pos);
});

casper.run();
```

