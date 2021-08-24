

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
        const axios2 = axios.create({
            // 设置当前实例的全局配置
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })

        // 发生真正的网络请求
        axios2(config).then(res => {
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
    const axios2_2 = axios.create({
        // 设置当前实例的全局配置
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 返回调用
    return axios2_2(config)
}

// 封装axios实例3---axios的拦截器
export function axios3(config) {
    // 创建实例
    const axios3 = axios.create({
        // 设置当前实例的全局配置
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // axios的拦截器--拦截本实例
    // 
    /**
     * 请求拦截
     * onFulfilled 函数--成功
     * onRejected 函数--失败
     */
    axios3.interceptors.request.use(config => {
        // 请求发送成功拦截
        console.log(config)
        // 释放拦截
        return config
    }, err => {
        // 请求发送失败拦截
        console.error(err)
    })

    /**
     * 响应拦截
     * onFulfilled 函数--成功
     * onRejected 函数--失败
     */
    axios3.interceptors.response.use(res => {
        // 响应成功拦截
        console.log(res)
        // 释放拦截
        return res
    }, err => {
        // 响应失败拦截
        console.error(err)
    })


    // 返回调用
    return axios3(config)
}