/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */

import React from 'react'
import { NavLink } from 'react-router'
import {Input, Select, Space } from 'antd';
import LoginAvatar from './LoginAvatar';
export default function NavHeader(props) {
    const options = [
        { value: 'issue', label: '问答' },
        { value: 'book', label: '书籍' },
      ];
    const onSearch = (value) => console.log(value);
  return (
    <div className='headerContainer'>
        {/* 左侧logo */}
        <div className='logoContainer'>
            <div className='logo'>
            </div>
        </div>
        {/* 头部导航  */}
        <nav className="navigationContainer">
            <NavLink to="/" className="navigation">问答</NavLink>
            <NavLink to="/books" className="navigation">书籍</NavLink>
            <NavLink to="/interview" className="navigation">面试题</NavLink>
            <a href='https://www.baidu.com' target='_blank' rel="noreferrer" className="navigation">视频教程</a>
            {/* <NavLink to="/contact" className="navgation">联系我们</NavLink> */}
        </nav>
        {/* 搜索框 */}
        <div className='searchContainer'>
          <Space.Compact style={{ width: '100%' }}>
              <Select size='large'  defaultValue="issue" options={options} style={{width: '20%'}} />
              <Input.Search defaultValue="请输入要搜索的内容" size='large'  enterButton="搜索" allowClear style={{width: '80%'}} />
          </Space.Compact>
        </div>
        {/* 登录按钮 */}
        <div className='loginBtnContainer'>
          <LoginAvatar loginHandler={props.loginHandler}/>
        </div>
    </div>
  ) 
}
