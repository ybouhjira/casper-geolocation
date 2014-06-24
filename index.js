//var require = patchRquire('')

module.exports = function (casper) {
  this._casper = casper; 

  // Add geolocation API
  casper.on('page.initialized', function on_initialize() {
    casper.evaluate(add_api);
  });
}

function add_api() {
  window.navigator.geolocation = 'geolocation';
}