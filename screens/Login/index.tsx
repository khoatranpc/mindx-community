'use client';
import React, { useRef } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { uuid } from '@/utils';
import { useAuthLogin } from '@/utils/hooks';
import { queryLogin } from './query';
import './styles.scss';

const Login = () => {
    const authLogin = useAuthLogin();
    const componentId = useRef(uuid());
    console.log(authLogin);
    const { values, setFieldValue, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: true
        },
        onSubmit(values) {
            authLogin.post?.({
                graphQl: {
                    query: queryLogin,
                    variables: {
                        userAuthenticateInput: {
                            email: values.email,
                            password: values.password
                        }
                    }
                },
                componentId: componentId.current
            });
        }
    });
    return (
        <div className="formLogin m-auto">
            <h3 className={`text-[2.6rem] font-bold mb-[2.6rem]`}>Đăng nhập</h3>
            <Form
                layout='vertical'
                onFinish={handleSubmit}
            >
                <Form.Item
                    label="Email"
                    name='email'
                    rules={[{ required: true, message: 'Bạn cần nhập Email!', type: 'email' }]}
                >
                    <Input placeholder="Nhập email đăng nhập" name='email' value={values.email} onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name='password'
                    rules={[{ required: true, message: 'Bạn cần nhập mật khẩu!' }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu" name='password' value={values.password} onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="remember"
                >
                    <div className='flex justify-between'>
                        <Checkbox checked={values.remember} onClick={() => {
                            setFieldValue('remember', !values.remember);
                        }}>Nhớ tôi</Checkbox>
                        <p className='cursor-pointer'>Quên mật khẩu?</p>
                    </div>
                </Form.Item>
                <Form.Item>
                    <Button className="w-full" htmlType='submit'>Đăng nhập</Button>
                    <p className='tunderline font-medium mt-[2.6rem] text-right text-[#0080ff]'>Đăng ký tham gia cộng đồng</p>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;