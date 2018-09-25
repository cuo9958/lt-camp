const Koa = require("koa");
const KoaBody = require("koa-body");
const Logger = require("./Logger");
const configs = require("./configs");
const utils = require("./utils");

const app = new Koa();

app.use(KoaBody(configs.body));

//添加路由
let controller_list = utils.getFileList(configs.root + "/controller");
controller_list.forEach(item => {
    try {
        let controller_item = require(configs.root + "/controller/" + item);
        if (controller_item) {
            app.use(controller_item.routes()).use(controller_item.allowedMethods());
        }
    } catch (error) {
        Logger.info(error.message);
    }
});

app.on('error', (err, ctx) => {
    Logger.warm('server error', err, ctx)
});

const port = configs.port || 3000;

app.listen(port, function () {
    Logger.info("camp已启动:" + port)
});

process.on('SIGINT', function () {
    process.exit();
});

process.on('exit', (code) => {
    Logger.info("app已停止:" + code)
});

process.on('uncaughtException', (code) => {
    Logger.info("app已停止:" + code)
});