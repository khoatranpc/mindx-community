'use client';
import React from 'react';
import { Button, Anchor } from 'antd';
import { useRouter } from 'next/navigation';
import { LoginOutlined } from '@ant-design/icons';
import './styles.scss';


export const AnchorHref = {
    targets: 'muc-tieu',
    lects: 'giang-vien',
    students: 'hoc-vien',
    events: 'su-kien-offline'
}
export type AnchorIntroducePage = keyof typeof AnchorHref;

export const AnchorIntroducePageTitle: Record<AnchorIntroducePage, string> = {
    targets: 'Mục tiêu',
    lects: 'Giảng viên',
    students: 'Học viên',
    events: 'Sự kiện'
}

const Header = () => {
    const router = useRouter();

    return (
        <div className='headerIntroPage flex justify-between p-[5.6rem] pb-0 items-center bg-white sticky top-0 z-10'>
            <div className="logo max-w-[18rem] z-10">
                <img src="/mindx.png" alt="MindX Community" />
            </div>
            <div className="flex-">
                <Anchor
                    className='flex justify-center anchorHeader'
                    direction="horizontal"
                    bounds={20}
                    items={Object.keys(AnchorIntroducePageTitle).map(item => {
                        return {
                            key: item,
                            title: AnchorIntroducePageTitle[item as AnchorIntroducePage],
                            href: `#${AnchorHref[item as AnchorIntroducePage]}`
                        }
                    })}
                />
            </div>
            <div className="authenticated">
                <Button
                    className='border-none bg-transparent shadow-none hover:text-[var(--base)!important] hover:scale-105 text-[1.8rem] font-bold'
                    onClick={() => {
                        router.push('/auth/login');
                    }}
                    icon={<LoginOutlined />}
                >
                    Tham gia
                </Button>
            </div>
        </div>
    )
}

export default Header;