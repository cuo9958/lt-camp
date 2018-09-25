const Koa = require("koa");
const render = require("koa-art-template");
const server = require("koa-static");
const KoaBody = require("koa-body");
const schedule = require('node-schedule');
const Logger = require("./logger");
const configs = require("./configs");
const utils = require("./utils");

const app = new Koa();
const port = configs.port || 3000;

/**
 * 设置模版引擎
 */
render(app, {
    root: configs.root + "/views",
    extname: ".html",
    debug: configs.debug
});
/**
 * 静态资源
 */
app.use(server(configs.root + "/public"));
/**
 * 处理返回对象
 */
app.use(KoaBody(configs.body));
/**
 * 添加全局中间件
 */
let middleware_list = utils.getFileList(configs.root + "/middleware");
middleware_list.forEach(item => {
    try {
        let middleware_list = require(configs.root + "/middleware/" + item);
        if (middleware_list) {
            app.use(middleware_list)
        }
    } catch (error) {
        Logger.info(error.message);
    }
});

//添加路由
const controller_list = utils.getFileList(configs.root + "/controller");
controller_list.forEach(item => {
    try {
        const controller_item = require(configs.root + "/controller/" + item);
        if (controller_item) {
            app.use(controller_item.routes()).use(controller_item.allowedMethods());
        }
    } catch (error) {
        Logger.info(error.message);
    }
});
/**
 * 错误处理页
 */
app.use(async function (ctx) {
    await ctx.render("err");
});
/**
 * koa错误
 */
app.on('error', (err, ctx) => {
    Logger.warm('server error', err, ctx)
});
/**
 * 监听
 */
app.listen(port, function () {
    Logger.info("camp已启动:" + port);
    require("./app");
});
/**
 * 快捷键停止
 */
process.on('SIGINT', function () {
    process.exit();
});
/**
 * 其他退出
 */
process.on('exit', (code) => {
    Logger.info("app已停止:" + code)
});
/**
 * 其他错误
 */
process.on('uncaughtException', (code) => {
    Logger.info("app已停止:" + code)
});

//执行定时器
const schedules = utils.getFileList(configs.root + "/schedules");
schedules.forEach(item => {
    try {
        const schedule_item = require(configs.root + "/schedules/" + item);
        if (schedule_item) {
            schedule.scheduleJob(schedule_item.rule, schedule_item.callback);
        }
    } catch (error) {
        Logger.info(error.message);
    }
});