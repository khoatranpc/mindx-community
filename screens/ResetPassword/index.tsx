'use client';
import { Form, Flex, Input ,Button,notification} from 'antd'

import {useState} from 'react'
import React from 'react'
import type { GetProps } from 'antd';
import { useRouter } from 'next/navigation';
type OTPProps = GetProps<typeof Input.OTP>;

const index = () => {
  // const [otp, setOtp] = useState('')
  const [email, setEmail] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const router = useRouter()

   const onChangeOTP: OTPProps['onChange'] = (text) => {
    console.log('onChangeOTP:', text);
  };
 const sharedProps: OTPProps = {
    onChangeOTP,
  };

  const handleOnClick = () => {
    if (!email || !newPass || !confirmPass) {
       notification.error({
        message: 'Thông báo',
         description: 'Bạn cần điền đầy đủ tất cả các trường trước khi xác nhận!',
         placement: 'topRight',
         duration:4,
        showProgress:true
       });
      
    }
    if (newPass !== confirmPass) {
      notification.error({
        message: 'Thông báo',
        description: 'Mật khẩu nhập lại không khớp vui lòng nhập lại!',
        placement:'topRight'
      })
    }
    else {
        notification.success({
        message: 'Hoàn thành',
        description: 'Bạn đã cập nhật mật khẩu thành công',
          placement: 'topRight',
        duration:4,
        showProgress:true
        })
      // router.push(`/auth/login`);
      
      console.log('email: ', email);
      console.log('newPass: ', newPass);
      console.log('confirmPass: ', confirmPass);
    }
    
  }

  return (
    <div>
      <h3 className={'text-[2.6rem] font-bold mb-[2.8rem]'}>Reset Password</h3>
      <Form>
      {/* nhap otp */}
        <Form.Item className='otp-container'>
          <h4 className={'text-[2.6rem] font-bold mb-[2.8rem] mr-4'}>OTP CODE</h4>
          <Flex gap="middle" align="flex-start" vertical>
             <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
         </Flex>
    </Form.Item>
        {/* nhap email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {required:true,message:'Bạn cần nhập email',type:'email'}
          ]}
        > 
          <Input placeholder="Nhập Email" value={ email}  onChange={(e) =>setEmail(e.target.value)}/>
        </Form.Item>
        {/* nhap password va confirm password */}
          <Form.Item
          label="Mật khẩu mới"
          name="NewPassWord"
          rules={[
            {required:true,message:'Bạn cần nhập mật khẩu mới'}
          ]}
        > 
          <Input.Password placeholder="Nhập mật khẩu mới" value={ newPass} onChange={(e) =>setNewPass(e.target.value)}/>
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="ConfirmPassWord"
          rules={[
            {required:true,message:'Bạn cần nhập lại mật khẩu mới'}
          ]}
        > 
          <Input.Password placeholder="Nhập lại mật khẩu mới" value={ confirmPass}onChange={(e) =>setConfirmPass(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='w-full font-bold' onClick={handleOnClick}>
              Xác Nhận thông tin
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default index