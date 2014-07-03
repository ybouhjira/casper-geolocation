var require = patchRequire(require)
  , CasperGeolocation = new require('./index.js');

// Create new CasperGeolocation instance that should 
// add the API on page.initialized event
geo = new CasperGeolocation(casper);

// TEST 1 : test that navigator.geolocation was added
casper.test.begin('Attaches the geolocation Object', 1, function test_add_api(test) {
  casper.start();
  
  function run_test_add_api() {
    function api_exits() {
      return 'geolocation' in navigator
    }
    test.assertEval(api_exits, 'navigator.geolocation is defined');
    test.done();  
  }

  casper.then(run_test_add_api);
  casper.run();
});
