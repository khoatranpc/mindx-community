import React from 'react';
import { Avatar, Dropdown, MenuProps } from 'antd';
import { LogoutOutlined, ProfileOutlined, SettingOutlined } from '@ant-design/icons';
import { Obj } from '@/global/interface';
import { useUserInfo } from '@/utils/hooks';

const PersonDropdown = () => {
    const user = useUserInfo();
    const getUser = (user.state.data as Obj)?.getUser as Obj;
    const items: MenuProps['items'] = [
        {
            key: 'Personal',
            label: <p className="flex gap-[0.8rem] mb-[0.8rem]"><ProfileOutlined /> <span>Thông tin & tài khoản</span></p>,
        },
        {
            key: 'Setting',
            label: <p className="flex gap-[0.8rem] mb-[0.8rem]"><SettingOutlined /> <span>Cài đặt</span></p>
        },
        {
            key: 'Logout',
            label: <p className="flex gap-[0.8rem] pt-[1.2rem] border-t"><LogoutOutlined /> <span>Đăng xuất</span></p>
        }
    ]
    return (
        <div className='personDropdown inline-block'>
            <Dropdown
                menu={{ items }}
                trigger={['click']}
            >
                <Avatar src={getUser.image ? getUser.image : '/mindxavatar.webp'} />
            </Dropdown>
        </div>
    )
}

export default PersonDropdown;