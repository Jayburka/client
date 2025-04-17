/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-13 16:21:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-17 15:56:22
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
export const userLogin = (data) => {
    return request({
        url: '/api/user/login',
        method: 'POST',
        data
    })
}

export const getUserById = (id) => {
    return request({
        url: `/api/user/${id}`,
        method: 'GET',
    })
}

export const getInfo = () => {
    return request({
        url: '/api/user/whoami',
        method: 'GET',
    })
}
/**
 * 
 * @returns 获取积分前十的用户
 */
export const getUserByPointsRankApi = () => {
    return request({
        url: '/api/user/pointsrank',
        method: 'GET',
    })
}