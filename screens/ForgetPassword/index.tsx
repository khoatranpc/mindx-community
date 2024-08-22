'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button } from 'antd';
import Alert from '@/components/Alert';
import Loading from '@/components/Loading';
const ForgetPassword = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [showAlert,setShowAlert] = useState(false)
    const [loading,setLoading] = useState(false)
    const handleChange = (event) => {
        setEmail(event.target.value)
    }
    const handleClick = () => {
        console.log(email)
        setLoading(true)
        setTimeout(() => {
            // console.log(email)
            setLoading(false)
            setShowAlert(true)
        },2000)
    }
    const handleResetPass = () => {
        router.push(`/auth/reset`);
    }
    return (
        <div className="forgetPass m-auto" >
            <h3 className={`text-[2.6rem] font-bold mb-[2.8rem] `}> Quên mật khẩu</h3>
            <Form layout='vertical'>
                <Form.Item
                    label='Email'
                    name='email'
                    rules={[{ required: true, message: 'Bạn cần nhập Email!', type: 'email' }]}
                >
                    <Input placeholder='nhập email để lấy lại mật khẩu'
                    onChange={handleChange} value={email}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' className='w-full font-bold' onClick={handleClick}>Lấy lại mật khẩu</Button>
                    <Button type='primary' className='w-full mt-[2rem] font-bold' onClick={handleResetPass}>Reset password</Button>
                </Form.Item>
            </Form>
            {loading && <Loading/>}
            {showAlert && (
                <Alert/>
            )}
        </div>
    );
};

export default ForgetPassword;
