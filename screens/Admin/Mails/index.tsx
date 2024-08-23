'use client';
import React from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useMailTemplate } from '@/utils/hooks';
import MailForm from '@/components/MailForm';
import List from './List';
import './styles.scss';

const Mails = () => {
    const mailTemplate = useMailTemplate();

    return (
        <div className='mailTemplates flex gap-[2.4rem]'>
            <div className='flex-[0.3] min-w-[24rem] border-r-[1px] border-solid border-[#eedbdb] pr-[2.4rem]'>
                <div className="titleBtn flex justify-between">
                    <span><b>Danh sách mẫu mail</b></span>
                    <Button size='small'><PlusCircleOutlined className='text-[var(--base)]' /></Button>
                </div>
                <hr className='mt-[1.2rem]' />
                <List mailTemplate={mailTemplate} />
            </div>
            <div className='contentMailDetail flex-1'>
                <MailForm mailTemplate={mailTemplate} />
            </div>
        </div>
    )
}

export default Mails;