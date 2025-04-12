/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-12 17:07:24
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-12 23:22:33
 * @FilePath: \client\src\components\LoginForm.jsx
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React, { useState, useRef } from 'react'
import { Form, Input, Modal, Radio, Row, Col } from 'antd';
import styles from '../css/LoginForm.module.css';

function LoginForm(props) {
    const [radioValue, setRadioValue] = useState('signin');
    const [loginInfo, setLoginInfo] = useState({
        loginId: '',
        password: '',
        captcha: '',
        remember: false
    });
    const [captcha, setCaptcha] = useState('');

    const loginFormRef = useRef(null);
    const handleRadioChange = (e) => {
        setRadioValue(e.target.value);
    }
    const LoginHandler = (values) => {
        console.log(values);
    }
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 20,
      },
    };
    function updateLoginInfo(key, value){
        setLoginInfo({...loginInfo, [key]: value});
    }
    function handleCaptchaClick(){
        console.log('验证码点击');
    }
    let container = null;
    console.log('captcha', captcha);
    
    if(radioValue === 'signin'){
      container =  (<Form
                        {...layout}
                        style={{
                          maxWidth: 600,
                          marginTop: 20
                        }}
                        name='signin'
                        autoComplete='off'
                        onFinish={LoginHandler}
                        ref={loginFormRef}
                      >
                        <Form.Item label="登录账号" name="loginId" rules={[{ required: true, message: '请输入登录账号' }]}>
                          <Input placeholder='请输入登录账号' value={loginInfo.loginId} onChange={(e) => updateLoginInfo('loginId', e.target.value)} />
                        </Form.Item>
                        <Form.Item label="登录密码" name="password" rules={[{ required: true, message: '请输入登录密码' }]}>
                          <Input.Password placeholder='请输入登录密码' value={loginInfo.password} onChange={(e) => updateLoginInfo('password', e.target.value)} />
                        </Form.Item>
                        <Form.Item labelAlign='left' label="验证码" name="captcha" rules={[{ required: true, message: '请输入验证码' }]}>
                          <Row>
                            <Col span={16}>
                              <Input placeholder='请输入验证码' value={loginInfo.captcha} onChange={(e) => updateLoginInfo('captcha', e.target.value)}/>
                            </Col>
                            <Col span={6}>
                              <div className={styles.captchaImg} onClick={handleCaptchaClick} dangerouslySetInnerHTML={{__html: captcha}} ></div>
                            </Col>
                          </Row>
                        </Form.Item>
                      </Form>)
    }else{
      container = <div>注册</div>
    }
    
  let model = (
    <Modal title="注册/登录" open={props.isModalOpen} onOk={props.closeModel} onCancel={props.closeModel}>
      <Radio.Group value={radioValue} defaultValue="signin" buttonStyle="solid" size='large' className={styles.radioGroup} onChange={handleRadioChange}>
        <Radio.Button value="signin" className={styles.radioButton}>登录</Radio.Button>
        <Radio.Button value="signup" className={styles.radioButton}>注册</Radio.Button>
      </Radio.Group>
      {container}
      <Radio value={loginInfo.remember} onChange={handleRadioChange}>是否记住</Radio>
    </Modal>
  )

  return (
    <div>
       {model}
    </div>
  )
}

export default LoginForm