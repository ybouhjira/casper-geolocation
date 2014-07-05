/**
 * Remote module
 */

module.exports = {

  /**
   * Adds the navigator.geolocation API
   */
  add_api: function(location) {  
    navigator.geolocation = {};

    // stores the fake location on remote
    navigator.geolocation.__casper_geo_loc = location;

    // geolocation.getCurrentPosition()
    navigator.geolocation.getCurrentPosition = function(callback) {
      callback(navigator.geolocation.__casper_geo_loc);
    };
  },

  /**
   * Updates the variable that holds the fake location
   * on the remote
   */
  update_location: function(location) {
    navigator.geolocation.__casper_geo_loc = location;
  }
};