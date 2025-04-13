/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-13 16:47:19
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-14 00:11:52
 * @FilePath: \client\src\setupProxy.js
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/res', createProxyMiddleware({
    target: 'http://127.0.0.1:7001/res',
    changeOrigin: true,
  }));
  app.use('/api', createProxyMiddleware({
    target: 'http://127.0.0.1:7001/api',
    changeOrigin: true,
  }));
  app.use('/static', createProxyMiddleware({
    target: 'http://127.0.0.1:7001/static',
    changeOrigin: true,
  }));
};
