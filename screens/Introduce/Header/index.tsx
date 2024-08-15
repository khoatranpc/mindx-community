'use client';
import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { LoginOutlined } from '@ant-design/icons';
import './styles.scss';

const Header = () => {
    const router = useRouter();

    return (
        <div className='headerIntroPage relative flex justify-between p-[5.6rem] items-center bg-white'>
            <div className="logo max-w-[18rem] z-10">
                <img src="/mindx.png" alt="MindX Community" />
            </div>
            <div className="authenticated">
                <Button
                    className='border-none bg-transparent shadow-none hover:text-[var(--base)!important] hover:scale-105'
                    onClick={() => {
                        router.push('/auth/login');
                    }}
                    icon={<LoginOutlined />}
                >
                    Đăng nhập
                </Button>
            </div>
        </div>
    )
}

export default Header;