var require = patchRequire(require);
var Remote = require('./remote.js');

/**
 * The module's class
 */
function CasperGeolocation(casper, location) {
  this._casper = casper; 
  this._location = location || {latitude : 0, longitude : 0};

  this._attach_api();
}

/**
 * Add the API on page.initialized
 */
CasperGeolocation.prototype._attach_api = function() {
  casper.on('page.initialized', function() {  
    casper.evaluate(Remote.add_api, this._location);
  });
};

/**
 * setter for _location
 */
CasperGeolocation.prototype.setLocation = function(location) {
  this._location = location;
};

module.exports = CasperGeolocation;