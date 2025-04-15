/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-13 16:19:36
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-14 22:22:49
 * @FilePath: \client\src\api\request.js
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import axios from 'axios';

const request = axios.create({
    timeout: 5000,
});

request.interceptors.request.use(config => { 
    const token = localStorage.getItem('userToken');
    if(token){
        config.headers['Authorization'] = "Bearer " + token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

request.interceptors.response.use(response => {
    console.log(response);
    if(response.status === 200){
        return response.data;
    }else{
        return Promise.reject(response.data);
    }
}, error => {
    return Promise.reject(error);
});

export default request;
