var vdpConfig = {};

var username = "";
var password = "";

vdpConfig.SANDBOX_URL = "https://vdp.visa.com";
vdpConfig.VDP_AUTH = "Basic " + new Buffer(username + ":" + password).toString("base64");

module.exports = vdpConfig;