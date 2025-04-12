/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import Issue from '../pages/Issue';
import Interviews from '../pages/Interviews';
import Books from '../pages/Books';
import { Route, Routes, Navigate } from 'react-router';
import { createBrowserRouter } from "react-router";
import App from '../App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Issue />,
            },
            {
                path: '/issue',
                element: <Issue />,
            },
            {
                path: '/books',
                element: <Books />,
            },
            {
                path: '/interview',
                element: <Interviews />,
            },
        ]
    },
        
])

export default router;

