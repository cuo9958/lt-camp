const redis = require("redis");
const configs = require("./configs");
const Logger = require("./logger");

const redisConfig = configs.redis;

let client;
if (redisConfig) {
    client = redis.createClient(redisConfig.port, redisConfig.host, {
        prot: redisConfig.port,
        host: redisConfig.host,
        password: redisConfig.pwd
    });
    client.on("error", function (err) {
        Logger.warm("Error " + err);
        client.quit();
    });
    client.on('connect', function () {
        Logger.info("连接redis");
    })
}

module.exports = client;