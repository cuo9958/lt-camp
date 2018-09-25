/**
 * 定时器测试任务
 */
module.exports = {
    rule: "*/5 * * * * *",
    callback: function () {
        console.log("测试")
    }
}