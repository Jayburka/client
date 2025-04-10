/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [
        {id: 1, name: '吃饭', completed: false},
        {id: 2, name: '睡觉', completed: false},
        {id: 3, name: '打游戏', completed: false},
    ]
};

const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
       ADD_LIST: (state, action) => {
        state.list.push(action.payload);
       },
       DELETE_LIST: (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload);
       },   
       EDIT_LIST: (state, action) => {
        state.list = state.list.map((item) => item.id === action.payload.id ? action.payload : item);
       },

    },
}); 

export default todolistSlice.reducer
