/**
 * 定时器测试任务
 */
module.exports = {
    rule: "*/1 * * * * *",
    callback: function () {
        console.log("测试")
    }
}