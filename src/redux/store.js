/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-10 21:32:41
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-14 22:36:40
 * @FilePath: \client\src\redux\store.js
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */

import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
