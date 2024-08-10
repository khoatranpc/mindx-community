import React from 'react';
import Course from '@/components/Course';
import { Button, Divider, Dropdown, Input, MenuProps } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import ArrowUpDown from '@/icons/ArrowUpDown';
import './styles.scss';

const Courses = () => {
    const itemsSort: MenuProps['items'] = [
        {
            key: 'ASC',
            label: 'Cũ nhất'
        },
        {
            key: 'DESC',
            label: 'Mới nhất'
        }
    ]
    return (
        <div className='courses'>
            <div className="toolBar mb-[1.6rem] flex justify-between relative">
                <div className='filter'>
                    <p className="mb-[1.2rem]"><span className="font-[500]">Bộ lọc</span> <FilterOutlined className="font-[500]" /></p>
                    <Dropdown
                        menu={{ items: itemsSort }}
                        trigger={['click']}
                    >
                        <Button size='small'><ArrowUpDown className='h-[1.6rem]' /> Thời gian</Button>
                    </Dropdown>
                </div>
                <div className='fnc flex gap-[2.4rem] absolute right-0'>
                    <Input size='small' suffix={<SearchOutlined className='max-h-full' />} />
                    <Button size='small'>Tạo</Button>
                </div>
            </div>
            <Divider />
            <div className="parent">
                <div className="div1"><Course /> </div>
                <div className="div2"><Course /> </div>
                <div className="div3"><Course /> </div>
                <div className="div4"><Course /> </div>
                <div className="div5"><Course /> </div>
                <div className="div6"><Course /> </div>
                <div className="div7"><Course /> </div>
                <div className="div8"><Course /> </div>
                <div className="div9"><Course /> </div>
                <div className="div10"><Course /> </div>
                <div className="div11"><Course /> </div>
                <div className="div12"><Course /> </div>
                <div className="div13"><Course /> </div>
                <div className="div14"><Course /> </div>
                <div className="div15"><Course /> </div>
            </div>
        </div>
    )
}

export default Courses;