var require = patchRequire(require)
  , CasperGeolocation = new require('./index.js');

// Create new CasperGeolocation instance that should 
// add the API on page.initialized event
var geo = new CasperGeolocation(casper);

// Check that the navigator.geolocation Object and 
// all it's methods are there
casper.test.begin('Attaches the geolocation Object', 2, function(test) {
  casper.start();

  casper.then(function() {
    // navigator.geolocation
    test.assertEval(function() {
      return 'geolocation' in navigator;  
    }, 'navigator.geolocation is defined');

    // navigator.geolocation.getCurrentPosition()
    test.assertEval(function() {
      return 'getCurrentPosition' in navigator.geolocation;
    }, 'geolocation.getCurentPosition() is defined');

    test.done();  
  });

  casper.run();
});

// Tests that getCurrentPosition() works
casper.test.begin('Test geolocation.getCurentPosition()', 1, function(test) {
  casper.start();

  casper.then(function() {
    this.evaluate(function() {
      navigator.geolocation.getCurrentPosition(function() {
        window.__casper_geolocation_test_get_current_position = 'test';
      });
    });
  });

  casper.then(function() {
    test.assertEvalEquals(function() {
      return window.__casper_geolocation_test_get_current_position;
    }, 'test', ".getCurrentPosition()'s callback called");

    test.done();
  });
  
  casper.run();
});