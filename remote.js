var Remote = {};

Remote.add_api = function(pos) {
  
  var api = window.navigator.geolocation = {};

  api = {};

  // stores the fake location
  api.__casper_geo_loc = 

  // geolocation.getCurrentPosition()
  api.getCurrentPosition = function(callback, err) {
    callback({coords : __casper_geo_loc});
  };
 
};

module.exports = Remote;