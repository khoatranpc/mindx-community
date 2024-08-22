'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button } from 'antd';
import Alert from '@/components/Alert';
import { useGetOTPRSP } from '@/utils/hooks';
import { queryGetOTP } from './query';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const getOtpRSP = useGetOTPRSP();
    const [showAlert, setShowAlert] = useState(false)
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    }
    const handleClick = () => {
        getOtpRSP.post?.({
            graphQl: {
                query: queryGetOTP,
                variables: {
                    dataInput: {
                        email: email
                    }
                }
            }
        });
    }
    const handleResetPass = () => {
        router.push(`/auth/reset`);
    }
    useEffect(() => {
        if (getOtpRSP.state.data) {
            toast(getOtpRSP.state.message as string, {
                type: getOtpRSP.state.success ? 'success' : 'error'
            });
            getOtpRSP.clear?.()
        }
    }, [getOtpRSP.state]);
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
                    <Button type='primary' htmlType='submit' className='w-full font-bold' loading={getOtpRSP.state.isLoading} onClick={handleClick}>Lấy lại mật khẩu</Button>
                </Form.Item>
            </Form>
            {/* {showAlert && (
                <Alert />
            )} */}
        </div>
    );
};

export default ForgetPassword;
