'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { InfoCircleOutlined } from '@ant-design/icons';
import { uuid } from '@/utils';
import { useAuthLogin } from '@/utils/hooks';
import { queryLogin } from './query';
import MindXLoading from '@/components/MindXLoading';
import './styles.scss';


const Login = () => {
    const authLogin = useAuthLogin();
    const isSubmit = useRef(false);
    const componentId = useRef(uuid());
    const router = useRouter();
    const { values, setFieldValue, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: true
        },
        onSubmit(values) {
            isSubmit.current = true;
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
    useEffect(() => {
        if (isSubmit.current) {
            isSubmit.current = false;
        }
    }, [values]);
    useEffect(() => {
        if (authLogin.state.success) {
            localStorage.setItem('access_token', authLogin.state.data?.authenticated?.access_token);
            router.push('/mindx');
        }
    }, [authLogin.state])
    // dung de chuyen trang
    const handleForgotPasswordClick = () => {
    router.push(`/auth/forget`);
};
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
                    <div className="relative">
                        <Input.Password placeholder="Nhập mật khẩu" name='password' value={values.password} onChange={handleChange} />
                        {authLogin.state.error && isSubmit.current && <p className="text-[red] text-[1.6rem] absolute translate-y-[3.6rem] p-[1rem] w-full rounded-[1rem] border-[1px] border-[red]"><InfoCircleOutlined /> {authLogin.state.error ? authLogin.state.message : ''}</p>}
                    </div>
                </Form.Item>
                <Form.Item
                    name="remember"
                >
                    <div className='flex justify-between mt-[6.2rem]'>
                        <Checkbox checked={values.remember} onClick={() => {
                            setFieldValue('remember', !values.remember);
                        }}>Nhớ tôi</Checkbox>
                        <p className='cursor-pointer' onClick={handleForgotPasswordClick}>Quên mật khẩu?</p>

           
                        {/* <p className='cursor-pointer'>Quên mật khẩu?</p> */}
                    </div>
                </Form.Item>
                <Form.Item>
                    <Button className="w-full" htmlType='submit' icon={authLogin.state.isLoading && <MindXLoading className='w-[1rem!important] p-[0.5rem!important]' />} disabled={authLogin.state.isLoading || authLogin.state.success}>Đăng nhập</Button>
                    <p className='tunderline font-medium mt-[2.6rem] text-right text-[#0080ff]'>Đăng ký tham gia cộng đồng</p>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;