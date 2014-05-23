/** casperjs-geolocation
  * A capser module that mocks the geolocation API
  */

// functions to be evaluated in remote
var Remote = {
  add_geolocation_api : function(pos) {
    navigator.geolocation = {
      // store pos here
      __casperFakeLocation : pos,
      
      // getcurrentposition
      getCurrentPosition : function(callback, err) {
        callback({coords : this.__casperFakeLocation});
      },

      // stores the callback passed to watchPosition
      __casperWatchCallback : undefined,

      // watchposition
      watchPosition : function(callback) {
        this.__casperwatchCallback = callback;
      }
    };
  },

  update_position : function(pos) {
    navigator.geolocation.__casperFakeLocation = pos;
    navigator.geolocation.__casperWatchCallback(pos);
  }
};

// module
var Geolocation = function(casper, pos) {
  this._pos = pos;
  this._casper = casper;
  this._casper.evaluate(Remote.add_geolocation_api, pos);
};

Geolocation.prototype.getPos = function () {
  return this._pos
};

Geolocation.prototype.setPos = function(pos) {
  this._pos = pos;
  this._casper.evaluate(Remote.update_position, pos);
};

module.exports = function(casper, pos) {
  var geo;
  casper.on('page.initialized', function() {
    geo = new Geolocation(casper, pos);
  });
  return geo;
}

