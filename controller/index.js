const Router = require("koa-router");

const router = new Router();

router.get('/', (ctx, next) => {
    console.log("index")
    ctx.body = "index"
});

module.exports = router;