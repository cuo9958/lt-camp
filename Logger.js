const log4js = require('log4js');
log4js.configure({
    appenders: {
        stdout: {
            type: "stdout"
        },
        error: {
            type: 'dateFile',
            filename: './logs/error.log',
        },
        info: {
            type: 'dateFile',
            filename: './logs/info.log'
        }
    },
    categories: {
        default: {
            appenders: ["info", "stdout"],
            level: 'info'
        },
        err: {
            appenders: ['error', "stdout"],
            level: 'error'
        }
    },
    pm2: true,
    pm2InstanceVar: "node-sso-wechat"
});

const logger = log4js.getLogger('error');
const logger2 = log4js.getLogger('info');

module.exports = {
    error() {
        logger.error(...arguments);
    },
    info() {
        logger2.info(...arguments);
    },
    warm() {
        logger2.info(...arguments);
    }
};