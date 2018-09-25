const fs = require("fs");
const axios = require("axios");
/**
 * 工具集
 */
module.exports = {
    /**
     * 获取目录下的所有文件
     * @param {*} dir_path 
     */
    getFileList(dir_path) {
        let file_list = []
        if (fs.existsSync(dir_path)) {
            file_list = fs.readdirSync(dir_path);
        }
        return file_list;
    },
    /**
     * 获取远程返回
     * @param {*} url 
     * @param {*} opts 
     */
    curl(url, opts) {
        return axios(Object.assign({
            url
        }, opts));
    }
}