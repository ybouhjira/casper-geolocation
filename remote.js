var Remote = {};

/**
 * Adds the navigator.geolocation API
 */
Remote.add_api = function(location) {  
  var api = window.navigator.geolocation = {};

  /**
   * stores the fake location
   */
  api.__casper_geo_loc = location;

  /**
   * geolocation.getCurrentPosition()
   */
  api.getCurrentPosition = function(callback) {
    callback(__casper_geo_loc);
  };
};

module.exports = Remote;