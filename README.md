# 提供活动页

## 使用到的库

1. koa2
2. config
3. koa-router
4. axios
5. koa-body
6. koa-static
7. redis
8. node-schedule
9. sequelize
10. log4js

## 目录结构

- config，配置目录
- controller，控制器目录
- logs，日志，本地生成不提交
- middleware，全局中间件
- models，数据库用到的模型
- public，静态资源
- schedules，定时任务
- views，视图
- app.js，其他初始化任务
- configs.js，当前配置文件+自定义配置
- db.js，数据初始化
- index.js，入口文件
- Logger.js，日志对象
- redis.js，redis的初始化
- utils.js，工具库