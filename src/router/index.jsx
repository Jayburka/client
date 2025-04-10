/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import Issuess from '../pages/Issuess';
import Interviews from '../pages/Interviews';
import Books from '../pages/Books';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
    { path: '/', element: <Issuess /> },
])
