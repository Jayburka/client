/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */

import './css/App.css';
import React, { useState } from 'react';
import NavHeader from './components/NavHeader';
import PageFooter from './components/PageFooter';
import { Outlet } from 'react-router';
import { Layout } from 'antd';
import LoginForm from './components/LoginForm';

const { Header, Content, Footer } = Layout;
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loginHandler = () => {
    setIsModalOpen(true);
  }
  function closeModel() {
    setIsModalOpen(false);
  }
  return (
    <div className="App">
      <Header className="header">
        {/* 头部导航 */}
        <NavHeader loginHandler={loginHandler}/>
      </Header>
      {/* 内容 */}
      <Content className='content'>
        <Outlet></Outlet>
      </Content>
      {/* 底部 */}
      <Footer className='footer'>
        <PageFooter />
      </Footer>
      <LoginForm closeModel={closeModel} isModalOpen={isModalOpen} />
    </div>
  );
}

export default App;
