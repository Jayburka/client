/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-10 21:32:41
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-14 23:15:17
 * @FilePath: \client\src\App.jsx
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */

import './css/App.css';
import React, { useState, useEffect } from 'react';
import NavHeader from './components/NavHeader';
import PageFooter from './components/PageFooter';
import { Outlet } from 'react-router';
import { Layout } from 'antd';
import LoginForm from './components/LoginForm';
import { getInfo, getUserById } from './api/user';
import { useDispatch } from 'react-redux';
import { setUser, changeLoginStatus } from './redux/userSlice';
import { message } from 'antd';




const { Header, Content, Footer } = Layout;
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();      
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if(token){
      async function getFetchData(){
        await getInfo(token).then(res => {
          if(res.data){
            getUserById(res.data._id).then(userInfo => {
              if(userInfo.data){
                dispatch(setUser(userInfo.data));
                dispatch(changeLoginStatus(true));
              }
            });
          }else{
            localStorage.removeItem('userToken');
            message.warning('登录已过期，请重新登录'); 
          }
        });
      }
      getFetchData(); 
    }
  }, []);
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
