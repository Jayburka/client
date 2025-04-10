/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import './css/App.css';
import React from 'react';
import NavHeader from './components/NavHeader';
import PageFooter from './components/PageFooter';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Header className="header">
        {/* 头部导航 */}
        <NavHeader />
      </Header>
      {/* 内容 */}
      <Content className='content'>
        <Outlet></Outlet>
      </Content>
      {/* 底部 */}
      <Footer className='footer'>
        <PageFooter />
      </Footer>
    </div>
  );
}

export default App;
