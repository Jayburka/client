/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-12 15:41:27
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-15 19:57:55
 * @FilePath: \client\src\redux\userSlice.js
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{
        isLogin: false,
        userInfo: {
        },
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.userInfo = payload;
        },
        changeLoginStatus: (state, {payload}) => {
            state.isLogin = payload;
        },
        // 清楚用户信息
        clearUserInfo: (state) => {
            state.userInfo = {};
            state.isLogin = false;
        },
    },
});

export const { setUser, changeLoginStatus, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;

