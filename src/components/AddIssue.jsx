/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React from 'react'
import { Button} from 'antd';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
export default function AddIssue() {
    const navigate = useNavigate();
    const { isLogin } = useSelector(state => state.user);
    const clickHandler = () => {
        
        if (!isLogin) { 
            message.warning('请先登录');
            return;
        }
        // 跳转到发问页面
        navigate('/issue/add');
    }
  return (
    <div>
        <Button type="primary" onClick={clickHandler} size="small" style={{width: '100%', marginBottom: '30px'}}>
            我要发问
        </Button>
    </div>
  )
}
