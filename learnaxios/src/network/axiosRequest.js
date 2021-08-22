

import axios from "axios";

/**
 * 封装axios实例1
 * @param config 调用信息--url,header,method....
 * @param success 函数--成功时调用
 * @param failter 函数--失败时调用
 */
export function axios1(config, success, failter) {
    // 创建实例
    const axios1 = axios.create({
        // 设置当前实例的全局配置
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 发生真正的网络请求
    axios1(config).then(res => {
        success(res)
    }).catch(error => {
        failter(error)
    })
}

// 封装axios实例2
export function axios2(config) {
    return new Promise((resolve, reject) => {
        // 创建实例
        const axios1 = axios.create({
            // 设置当前实例的全局配置
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })

        // 发生真正的网络请求
        axios1(config).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

// 封装axios实例2 ---> 改进
// 因为axios本身支持Promise 所以可以直接返回就行
export function axios2_2(config) {
    // 创建实例
    const axios1 = axios.create({
        // 设置当前实例的全局配置
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 返回调用
    return axios1(config)
}