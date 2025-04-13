/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-13 16:21:36
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-13 22:03:18
 * @FilePath: \client\src\api\user.js
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import request from './request';

export const getCaptcha = (data) => {
    return request({
        url: '/res/captcha',
        method: 'GET',
        data
    })
};

/**
 * 查询用户是否存在
 */
export const checkUserExist = (data) => {
    return request({
        url: `/api/user/userIsExist/${data.loginId}`,
        method: 'GET',
    })
};

export const addUser = (data) => {
    return request({
        url: '/api/user/',
        method: 'POST',
        data
    })
}



