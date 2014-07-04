module.exports = CasperGeolocation;

function CasperGeolocation(casper, position) {
  this._casper = casper; 
  this._position = position || {latitude : 0, longitude : 0};

  CasperGeolocation._attach_api();
}

CasperGeolocation._attach_api = function() {
  casper.on('page.initialized', function() {  
    casper.evaluate(function() {
      window.navigator.geolocation = {};
      window.navigator.geolocation.getCurrentPosition = function(callback) {
        callback();
      };
    });
  });
};

CasperGeolocation.prototype.setLocation = function(position) {
  this._position = position;
};