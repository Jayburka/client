/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-12 15:41:27
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-12 22:00:18
 * @FilePath: \client\src\redux\userSlice.js
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import { createSlice } from '@reduxjs/toolkit';

// crateSlice 用户创建切片
const initialState = {
        isLogin: false,
        userInfo: {
            name: '',
            avatar: '',
        },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

