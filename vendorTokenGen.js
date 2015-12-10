/**
 * Created by uvashish on 10/13/15.
 */
var crypto = require('crypto');
var appConfig = require('./config');
var vendorTokenGen = {};

vendorTokenGen.getVendorKey = function(req, api_path, api_key, shared_secret,payload){

    console.log("path: "+api_path);
    console.log("api key : "+api_key);
    console.log("ss : "+shared_secret);

    //var payload = "";
    //
    //if(!(req.method == 'GET')){ // if its not get use body else empty
    //    console.log("NOT a GET call");
    //    payload = JSON.stringify(req.body);
    //}

    console.log(payload);

    var timestamp = Math.floor(new Date().getTime() / 1000);
    console.log("timestamp: "+ timestamp);
    console.log("commenting out the payload from hash generation");
    //var hashString = api_path+api_key+timestamp+shared_secret+payload;
    var hashString = shared_secret+timestamp+api_path+"apikey="+api_key+payload;

    console.log("before hashString: "+hashString);

    var hash = crypto.createHash('sha256').update(hashString).digest('hex');
    console.log("after hash: "+hash);

    var token = "x:"+timestamp+":"+hash;
    console.log(token);

    return token;
}

module.exports = vendorTokenGen;