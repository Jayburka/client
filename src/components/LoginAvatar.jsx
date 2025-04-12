import React from 'react'
import { useSelector } from 'react-redux';
import { Button, List, Popover, Avatar } from 'antd';
import styles from '../css/LoginAvatar.module.css';
import { UserOutlined } from '@ant-design/icons';

// 用户显示用户头像  如果用户没有登录，则显示用户登录按钮
function LoginAvatar(props) {

    // let isLogin = useSelector((state) => {console.log(state); return state.user.isLogin});
    // const userInfo = useSelector((state) => state.user.userInfo);
    const user = useSelector((state) => state.user);
    const {isLogin, userInfo} = user;
    const content = (
        <List
            dataSource={["个人中心", "退出登录"]}
            renderItem={(item) => (
                <List.Item style={{cursor: "pointer"}} >
                    {item}
                </List.Item>
            )}
        />
    );

    let loginStatus = isLogin ? (
        // 已登录
            <Popover content={content} title="Title" placement="bottom" >
                <div className={styles.avatarContainer}>
                    <Avatar size='large'  icon={<UserOutlined />}/>
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