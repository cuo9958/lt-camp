/**
 * 处理浏览器信息，附加在头部
 */
module.exports = function (ctx, next) {
    const userAgent = ctx.headers["user-agent"];
    ctx.brower = {
        wx: /MicroMessenger/.test(userAgent),
        app: ctx.url.indexOf("#app") > 0,
    }
    next();
}