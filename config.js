var appConfig = {};

appConfig.production = process.env.NODE_ENV === 'production';

appConfig.databases = {};

appConfig.databases.mongo = {};

// superbowl-dev-mongolabs
appConfig.databases.mongo.username = process.env.MONGO_USER;
appConfig.databases.mongo.password = process.env.MONGO_PASS;
appConfig.databases.mongo.host = process.env.MONGO_HOST;
appConfig.databases.mongo.port = process.env.MONGO_PORT;
appConfig.databases.mongo.db = process.env.MONGO_DB;

appConfig.databases.mongo.primary="mongodb://admin:secret@ds031922.mongolab.com:31922/credable";

//appConfig.databases.mongo.primary = "mongodb://"+appConfig.databases.mongo.username+":"+
//    appConfig.databases.mongo.password+"@"+appConfig.databases.mongo.host+":"+appConfig.databases.mongo.port+"/"+
//    appConfig.databases.mongo.db

if(!appConfig.production) {
    console.log("localhost");
    appConfig.databases.mongo.primary = "mongodb://localhost:27017/credable";
}

appConfig.secret_key = "secret-value";

module.exports = appConfig;