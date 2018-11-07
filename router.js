const Router = require("koa-router");
const configs = require("./configs")

module.exports = function (path = "") {
    return new Router({
        prefix: configs.get("prefix") + path
    });
}