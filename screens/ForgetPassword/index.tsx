'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button ,notification} from 'antd';

import MindXLoading from '@/components/MindXLoading';
const ForgetPassword = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')

    const handleChange = (event:any) => {
        setEmail(event.target.value)
        
    }
    const handleClick = () => {
        if (!email) {
            notification.error({
                message:'Bạn chưa nhập email, vui lòng nhập email của bạn!'
            })
        }
        else {  
            console.log(email)
            {<MindXLoading/>}
            setTimeout(() => {
                {<MindXLoading/>}
                
            notification.success({
            message: 'Hoàn thành',
            description: 'Mã OTP đã được gửi thành công vui lòng kiểm tra email của bạn!',
              placement: 'topRight',
            duration:4,
            showProgress:true
            })
            router.push(`/auth/reset`); 
            }, 3000)
        }
        
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
                    <Input placeholder='Nhập email để lấy lại mật khẩu'
                    onChange={handleChange} value={email}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' className='w-full font-bold' onClick={handleClick}
                    
                    >Lấy lại mật khẩu</Button>
            
                </Form.Item>
            </Form>
        </div>
    );
};

export default ForgetPassword;
