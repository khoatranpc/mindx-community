'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, FloatButton,notification } from 'antd';
import { useGetOTPRSP } from '@/utils/hooks';
import { queryGetOTP } from './query';
import { toast } from 'react-toastify';
import { CaretLeftOutlined } from '@ant-design/icons';
const ForgetPassword = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const getOtpRSP = useGetOTPRSP();

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
         if (!email) {
            notification.error({
                message: 'Bạn chưa nhập email, vui lòng nhập email của bạn!',
            });
        } else {
            console.log(email);
            setTimeout(() => {
                notification.success({
                    message: 'Hoàn thành',
                    description: 'Mã OTP đã được gửi thành công, vui lòng kiểm tra email của bạn!',
                    placement: 'topRight',
                    duration: 4,
                    showProgress: true,
                });
                router.push(`/auth/resetPassword`);
            }, 3000);
        }

    }
    const handleReturn = () => {
         router.push(`/auth/login`); 
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
                    <Button type='primary' htmlType='submit' className='w-full font-bold'  onClick={handleClick}>Lấy lại mật khẩu</Button>
                </Form.Item>
                <Form.Item>
                    <FloatButton icon={<CaretLeftOutlined />}  onClick={handleReturn} >
                        
                    </FloatButton>
                </Form.Item>
            </Form>

        </div>
    );
};

export default ForgetPassword;
