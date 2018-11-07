
const router = require("../router")();

router.get('/', async (ctx, next) => {
    await ctx.render("index");
});

module.exports = router;