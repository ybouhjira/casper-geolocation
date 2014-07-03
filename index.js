module.exports = CasperGeolocation;

function CasperGeolocation(casper) {
  this._casper = casper; 
  
  CasperGeolocation._attach_api();
}

CasperGeolocation._attach_api = function() {
  casper.on('page.initialized', function on_page_initialized() {  
    casper.evaluate(add_api);
    function add_api() {
      window.navigator.geolocation = {};
      window.navigator.geolocation.getCurrentPosition = function() {};
    }
  });
};