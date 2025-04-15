/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-12 15:36:21
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-15 20:00:32
 * @FilePath: \client\src\components\LoginAvatar.jsx
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React from 'react'
import { useSelector } from 'react-redux';
import { Button, List, Popover, Avatar, Image } from 'antd';
import styles from '../css/LoginAvatar.module.css';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { clearUserInfo } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
// 用户显示用户头像  如果用户没有登录，则显示用户登录按钮
function LoginAvatar(props) {

    const user = useSelector((state) => state.user);
    const {isLogin, userInfo} = user;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function listClickHandler(item){
        if(item === "退出登录"){
            localStorage.removeItem('userToken');
            message.success('退出登录成功');
            dispatch(clearUserInfo());
        }
        // }else if(item === "个人中心"){
        //     navigate('/');
        // }
    }
    const content = (
        <List
            dataSource={["个人中心", "退出登录"]}
            renderItem={(item) => (
                <List.Item style={{cursor: "pointer"}} onClick={() => listClickHandler(item)}>
                    {item}
                </List.Item>
            )}
        />
    );

    let loginStatus = isLogin ? (
        // 已登录
            <Popover content={content} title="Title" placement="bottom" >
                <div className={styles.avatarContainer}>
                    <Avatar size='large' src={<Image src={userInfo?.avatar} preview={false}/>} icon={<UserOutlined />}/>
                </div>
            </Popover>
    ) : (
        <Button type='primary' size='large' onClick={props.loginHandler}>登录</Button>
    );
    
  return (
    <div>
        {loginStatus}
    </div>
  )
}

export default LoginAvatar