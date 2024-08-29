import React from 'react';
import { Input, Badge, Button } from 'antd';
import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import ThemeMode from '@/components/ThemeMode';
import PersonDropdown from '@/components/PersonDropdown';

const HeaderAdminLayout = () => {
    return (
        <div className="mx-[16px] h-full flex items-center justify-between">
            {/* <Input className="max-w-[20rem]" size={'middle'} suffix={<SearchOutlined />} /> */}
            <div className="ftleft flex items-center gap-[2.4rem] ml-auto">
                <ThemeMode />
                <Badge size='small' count={99} overflowCount={9} dot>
                    <Button size='small' className="w-[3rem] h-[3rem] rounded-full">
                        <BellOutlined className="text-[16px]" />
                    </Button>
                </Badge>
                <PersonDropdown />
            </div>
        </div>
    )
}

export default HeaderAdminLayout;