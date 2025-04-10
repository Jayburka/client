/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import {configureStore} from '@reduxjs/toolkit';
import todolistReducer from './todolistSlice';

const store = configureStore({
    name:'todolist',
    reducer: {
        todolist: todolistReducer,
    },
});

export default store;
