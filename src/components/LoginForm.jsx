/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-12 17:07:24
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-14 20:51:06
 * @FilePath: \client\src\components\LoginForm.jsx
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React, { useState, useRef, useEffect } from 'react'
import { Form, Input, Modal, Radio, Row, Col, Button, message } from 'antd';
import { getCaptcha, checkUserExist, addUser, userLogin, getUserById } from '../api/user';
import { setUser, changeLoginStatus } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../css/LoginForm.module.css';

function LoginForm(props) {
    const dispatch = useDispatch();
    const [radioValue, setRadioValue] = useState('signin');
    const [loginInfo, setLoginInfo] = useState({
        loginId: '',  
        loginPwd: '',
        captcha: '',
        remember: false
    });
    const user = useSelector((state) => state.user);
    const [captcha, setCaptcha] = useState('');
    const [registerInfo, setRegisterInfo] = useState({
        loginId: '',
        nickname: '',
        captcha: '',
    });
    const loginFormRef = useRef(null);
    const registerFormRef = useRef(null);
    const handleRadioChange = (e) => {
        setRadioValue(e.target.value);
    }
    async function LoginHandler() {
      const result =await userLogin(loginInfo)
      const res = result.data;
      if(!res){
        message.warning("登录失败");
        handleCaptchaClick();
      }else if(!res.data.enabled){
        message.error('账号已禁用');
        handleCaptchaClick();
      }else{
          localStorage.userToken = res.token;
          const userInfo = await getUserById(res.data._id);
          dispatch(setUser(userInfo));
          dispatch(changeLoginStatus(true));
          props.closeModel();
      }
    }
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 20,
      },
    };
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
      handleCaptchaClick();
    }, [props.isModalOpen]);
     function updateLoginInfo(key, value){
        setLoginInfo({...loginInfo, [key]: value});
    }
    function updateRegisterInfo(key, value){
        setRegisterInfo({...registerInfo, [key]: value});
    }
    function handleCaptchaClick(){
      async function fetchCaptcha(){
        await getCaptcha().then(res => {
            setCaptcha(res);
        });
       }
       fetchCaptcha();
    }
    async function validateNickname(rule, value, callback){
      if(registerInfo.loginId.length > 0){
        await checkUserExist({loginId: registerInfo.loginId}).then(res => {
          if(res.data){
            callback(new Error('用户已存在'));
          }else{
            callback();
          }
         });
      }
      
    }
    async function signupHandler(values){
        await addUser(values).then(res => {
          console.log(res.data);
          if(res.data){
            dispatch(setUser({
              loginId: res.data.loginId,
              nickname: res.data.nickname,
              avatar: res.data.avatar,
            }));
            messageApi.open({
              type: 'success',
              content: '注册成功',
            });
            dispatch(changeLoginStatus(true));
          }else{
            message.warning(res.msg);
            handleCaptchaClick();
          } 
        });
        
        console.log(user);
    }
    function handleCancel(){
      setLoginInfo({
        loginId: '',
        password: '',
        captcha: '',
        remember: false
      });
      setRegisterInfo({
        loginId: '',
        nickname: '',
        captcha: '',
      });
      setRadioValue('signin');
      props.closeModel();
    }
    let container = null;
    
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
                        <Form.Item label="登录密码" name="loginPwd" rules={[{ required: true, message: '请输入登录密码' }]}>
                          <Input.Password placeholder='请输入登录密码' value={loginInfo.loginPwd} onChange={(e) => updateLoginInfo('loginPwd', e.target.value)} />
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
                        <Form.Item  name="remember" valuePropName="checked" initialValue={false}>
                          <Radio value={loginInfo.remember} onChange={handleRadioChange}>是否记住</Radio>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 5,
                                span: 16,
                            }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ marginRight: 20 }}
                            >
                                登录
                            </Button>
                            <Button type="primary" htmlType="submit">
                                重置
                            </Button>
                        </Form.Item>
                
                      </Form>)
    }else{
      container = (
         <Form
          {...layout}
          style={{
            maxWidth: 600,
            marginTop: 20
          }}
          name='signup'
          autoComplete='off'
          onFinish={signupHandler}
          ref={registerFormRef}
        >
            <Form.Item label="账号名称" name="loginId" validateTrigger={['onBlur']} rules={[{ required: true, message: '请输入账号名称' }, { validator: validateNickname }]} >
              <Input placeholder='请输入登录账号' value={registerInfo.loginId} onChange={(e) => updateRegisterInfo('loginId', e.target.value)} />
            </Form.Item>
            <Form.Item label="用户昵称" name="nickname" rules={[
              { required: true, message: '请输入用户昵称' },
              ]}
              >
              <Input placeholder='请输入用户昵称' value={registerInfo.nickname} onChange={(e) => updateRegisterInfo('nickname', e.target.value)} />
            </Form.Item>
            <Form.Item label="验证码" name="captcha" rules={[{ required: true, message: '请输入验证码' }]}>
              <Row>
                <Col span={16}>
                  <Input placeholder='请输入验证码' value={registerInfo.captcha} onChange={(e) => updateRegisterInfo('captcha', e.target.value)}/>
                </Col>
                <Col span={6}>
                <div className={styles.captchaImg} onClick={handleCaptchaClick} dangerouslySetInnerHTML={{__html: captcha}} ></div>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
                    wrapperCol={{
                        offset: 5,
                        span: 16,
                    }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginRight: 20 }}
                    >
                        注册
                    </Button>
                    <Button type="primary" htmlType="submit">
                        重置
                    </Button>
                </Form.Item>
                
        </Form>
      )
    }
    
  let model = (
    <Modal title="注册/登录" open={props.isModalOpen} onOk={props.closeModel} onCancel={props.closeModel}>
      <Radio.Group value={radioValue} defaultValue="signin" buttonStyle="solid" size='large' className={styles.radioGroup} onChange={handleRadioChange}>
        <Radio.Button value="signin" className={styles.radioButton}>登录</Radio.Button>
        <Radio.Button value="signup" className={styles.radioButton}>注册</Radio.Button>
      </Radio.Group>
      {container}
      
    </Modal>
  )

  return (
    <div>
       {model}
       
    </div>
  )
}

export default LoginForm