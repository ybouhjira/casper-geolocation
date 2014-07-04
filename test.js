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

  /** calls getCurrentPosition with a callback
    * that sets window.__foo__ to value */
  function call_get_current_position(value) {
    casper.evaluate(function(value) {
      navigator.geolocation.getCurrentPosition(function() {
        window.__foo__ = value;
      })  
    }, value);
  }

  /** returns window.__foo__ set by call_get_current_position()  */
  function get_foo() { return window.__foo__ }

  // START CASPER
  casper.start();

  // Call getCurrentPosition and declare 
  // window.__foo__ = 1 in the callback
  casper.then(function() {
    call_get_current_position(1);
  });

  // test that __foo__ === 1
  casper.then(function() {
    test.assertEvalEquals(get_foo, 1, "callback called");
  });

  
  // // Change the location 
  // casper.then(function() {
  //   geo.setLocation({latitude : 12, longitude: 13});
  //   call_get_current_position(2);
  // })

  // // Test that the 
  // casper.then(function() {
  //   test.assertEvalEquals(get_foo, 2, "Callback called after changing the location");
  //   test.done();
  // })
  
  casper.run();
});