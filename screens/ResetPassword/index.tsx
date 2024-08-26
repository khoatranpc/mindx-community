'use client';
import { Form, Flex, Input, Button, notification } from 'antd'
import { useState } from 'react'
import React from 'react'
import type { GetProps } from 'antd';
import { useRouter } from 'next/navigation';
type OTPProps = GetProps<typeof Input.OTP>;
import MindXLoading from '@/components/MindXLoading';

const ResetPassword = () => {
  const [otp, setOtp] = useState('')
  const [email, setEmail] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const router = useRouter()

 const onChange: OTPProps['onChange'] = (text: string) => {
    setOtp(text)
    if (text.length === 6) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setShowForm(true)
      },2000)
    }
  };
 const sharedProps: OTPProps = {
    onChange,
  };
  const handleOnClick = () => {
    if (!email || !newPass || !confirmPass) {
      notification.error({
        message: 'Thông báo',
        description: 'Bạn cần điền đầy đủ tất cả các trường trước khi xác nhận!',
        placement: 'topRight',
        duration: 4,
        showProgress: true
      });
      return 
    }
    if (newPass !== confirmPass) {
      notification.error({
        message: 'Thông báo',
        description: 'Mật khẩu nhập lại không khớp vui lòng nhập lại!',
        placement: 'topRight',
        duration: 4,
        showProgress:true
      })
      return
    }
      router.push(`/auth/login`);
      // in ra thong tin
      console.log('otp: ',otp)
      console.log('email: ', email);
      console.log('newPass: ', newPass);
      console.log('confirmPass: ', confirmPass);
    
    
  }

  return (
    <div>
      <h3 className={'text-[2.6rem] font-bold mb-[2.8rem]'}>Reset Password</h3>
      <Form layout='vertical'>
      {/* nhap otp */}
        <Form.Item className='otp-container' >
          <p className={'text-[2rem]  mb-[2rem] mr-4'}>Vui lòng nhập mã OTP của bạn tại đây</p>
          <Flex gap="middle"  vertical>
             <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} size='large' />
          </Flex>
        </Form.Item>
        
    
        {loading && <MindXLoading/>}

        {/* truong hop showForm */}
        {showForm && (
          <>
        {/* nhap email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Bạn cần nhập email', type: 'email' }
          ]}
        >
          <Input placeholder="Nhập Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        {/* nhap password va confirm password */}
        <Form.Item
          label="Mật khẩu mới"
          name="NewPassWord"
          rules={[
            { required: true, message: 'Bạn cần nhập mật khẩu mới' }
          ]}
        >
          <Input.Password placeholder="Nhập mật khẩu mới" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="ConfirmPassWord"
          rules={[
            { required: true, message: 'Bạn cần nhập lại mật khẩu mới' }
          ]}
        >
          <Input.Password placeholder="Nhập lại mật khẩu mới" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='w-full font-bold' onClick={handleOnClick}>
            Xác Nhận thông tin
          </Button>
        </Form.Item>
          </>
        )}
      </Form>
    </div>
  )
}

export default ResetPassword