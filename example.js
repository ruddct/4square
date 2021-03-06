// Generated by CoffeeScript 1.10.0
(function() {
  var foursquare, params;

  require('coffee-script');

  foursquare = (require('./foursquarevenues'))(process.env.foursquareID, process.env.foursquareSecret);

  params = {
    "ll": "40.7,-74"
  };

  foursquare.getVenues(params, function(error, venues) {
    return console.log(!error ? venues : error);
  });

  foursquare.exploreVenues(params, function(error, venues) {
    return console.log(!error ? venues : error);
  });

}).call(this);
