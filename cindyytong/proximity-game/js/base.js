//test page linked
console.log("working");

//Yelp uses Oauth 1.0a, which requires for signing of requests, before you can make calls to their API. Additional info on Oauth 1.0a http://oauthbible.com/. Essentially, I got a request token online from Yelp but I need to use this to request an access token which will then allow me access to protected resources on Yelp
//I need to download require.js which is a JS file and module loader which improves speed of code http://requirejs.org/docs/why.html#1

var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

require(['foo'], function (foo) {
    //foo is now loaded.
});

// requirejs(['foo', 'bar'],
// function   (foo,   bar) {
//     //foo and bar are loaded according to requirejs
//     //config, but if not found, then node's require
//     //is used to load the module.
// });

/* require the modules needed */
// Instructions: https://arian.io/how-to-use-yelps-api-with-node/
var oauthSignature = requirejs('oauth-signature');  
var n = requirejs('nonce')();  
var request = requirejs('request');  
var qs = requirejs('querystring');  
var _ = requirejs('lodash');

/* Function for yelp call
 * ------------------------
 * set_parameters: object with params to search
 * callback: callback(error, response, body)
 */
var request_yelp = function(set_parameters, callback) {

  /* The type of request */
  var httpMethod = 'GET';

  /* The url we are using for the request */
  var url = 'http://api.yelp.com/v2/search';

  /* We can setup default parameters here */
  var default_parameters = {
    location: 'San+Francisco',
    sort: '2'
  };

  /* We set the require parameters here */
  var required_parameters = {
    oauth_consumer_key : process.env.oauth_consumer_key,
    // oauth_consumer_key : 'OqEriLrNOIRdv--q59Es6g',
    oauth_token : process.env.oauth_token,
    // oauth_token : 'vN3S7-leAGuSEB7LMjA9Wam6cFXOxr7r',
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  /* We combine all the parameters in order of importance */ 
  var parameters = _.assign(default_parameters, set_parameters, required_parameters);

  /* We set our secrets here */
  var consumerSecret = process.env.consumerSecret;
   var consumerSecret = process.env.consumerSecret;

  var tokenSecret = process.env.tokenSecret;

  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  /* We add the signature to the list of paramters */
  parameters.oauth_signature = signature;

  /* Then we turn the paramters object, to a query string */
  var paramURL = qs.stringify(parameters);

  /* Add the query string to the url */
  var apiURL = url+'?'+paramURL;

  /* Then we use request to send make the API Request */
  request(apiURL, function(error, response, body){
    return callback(error, response, body);
  });

};