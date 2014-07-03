module.exports = CasperGeolocation;

function CasperGeolocation(casper) {
  this._casper = casper; 
  
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