'use client';
import React, { useState } from 'react';
import { InfoCircleOutlined, PinterestOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import ReactQuill from 'react-quill';

const ListMail = () => {
    const [value, setValue] = useState('');

    return <div className='mailDetail flex gap-[2.4rem]'>
        <div className="mail flex-1">
            <div className='titleMail mb-[1.2rem]'>
                <Input size='small' placeholder='Tiêu đều email!' />
            </div>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            <div className='flex justify-end mt-[1.2rem]'>
                <Button className='' size='small'>Lưu</Button>
            </div>
        </div>
        <div className="contentInstruction max-w-[24rem] shadow-xl p-[2.4rem] relative">
            <PinterestOutlined className='text-[var(--base)] absolute top-[-0.5rem] right-[-0.5rem]' />
            <p><InfoCircleOutlined className='text-orange-400 font-bold' /> <span><strong>Lưu ý:</strong></span></p>
            <p>Để hệ thống tự động điền thông tin chính xác vào vị trí trong đoạn văn, hãy sử dụng cú pháp: <b>{"{{REPLACE}}"}</b> tại vị trí cần điền!</p>
        </div>
    </div>
}

export default ListMail;