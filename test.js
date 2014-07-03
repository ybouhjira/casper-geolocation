var require = patchRequire(require)
  , CasperGeolocation = new require('./index.js');

// Create new CasperGeolocation instance that should 
// add the API on page.initialized event
geo = new CasperGeolocation(casper);

casper.test.begin('Attaches the geolocation Object', 2, function test_add_api(test) {
  casper.start();

  casper.then(run_test_add_api);
  function run_test_add_api() {
    
    // navigator.geolocation
    test.assertEval(geolocation_exits, 'navigator.geolocation is defined');
    function geolocation_exits() {
      return 'geolocation' in navigator;  
    }

    // navigator.geolocation.getCurrentPosition()
    test.assertEval(get_current_position_exists, 'geolocation.getCurentPosition() geolocation_exits');
    function get_current_position_exists() {
      return 'getCurrentPosition' in navigator.geolocation;
    }

    test.done();  
  }

  casper.run();
});

//casper.test.begin('Test geolocation.getCurentPosition(', 1, function test_get_current_position())