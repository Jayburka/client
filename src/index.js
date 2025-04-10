/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React from 'react';
import {createRoot} from 'react-dom/client'; //使用新的创建方法  18+之后使用新的根渲染方式。
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
 )
