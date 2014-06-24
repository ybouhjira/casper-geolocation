var require = patchRequire(require)
  , geo = new require('./index.js')(casper);

casper.test.begin('Attaches the geolocation Object', 1, function test_add_api(test) {
  casper.start();
  
  casper.then(function run_test() {
    test.assertEval(function navigator_gelocation_exits() { 
      return 'geolocation' in navigator;
    }, 'navigator.geolocation is defined');
    
    test.done();
  });

  casper.run();
});
