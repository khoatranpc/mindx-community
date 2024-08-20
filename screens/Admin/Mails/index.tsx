import React from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import MailDetail from '@/components/MailDetail';

const Mails = () => {
    return (
        <div className='mailTemplates flex gap-[2.4rem]'>
            <div className='flex-[0.3] min-w-[24rem] border-r-[1px] border-solid border-[#eedbdb] pr-[2.4rem]'>
                <div className="titleBtn flex justify-between">
                    <span><b>Danh sách mẫu mail</b></span>
                    <Button size='small'><PlusCircleOutlined className='text-[var(--base)]' /></Button>
                </div>
                <div className="listMail">
                    ahih
                </div>
            </div>
            <div className='contentMailDetail flex-1'>
                <MailDetail />
            </div>
        </div>
    )
}

export default Mails;