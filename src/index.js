/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React from 'react';
import {createRoot} from 'react-dom/client'; //使用新的创建方法  18+之后使用新的根渲染方式。
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <ConfigProvider locale={zhCN}>
                <App />
            </ConfigProvider>
        </Provider>
    </BrowserRouter>
 )
