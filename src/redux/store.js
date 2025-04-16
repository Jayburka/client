/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-10 21:32:41
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-16 10:13:01
 * @FilePath: \client\src\redux\store.js
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */

import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import typeReducer from './typeSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        type: typeReducer,
    },
});

export default store;
