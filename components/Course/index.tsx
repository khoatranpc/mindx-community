import React from 'react';
import { Tag } from 'antd';
import Image from 'next/image';
import StarRating from '../StarRating';
import { InfoCircleOutlined, StarFilled } from '@ant-design/icons';

const Course = () => {
    return (
        <div className='course shadow-lg rounded-[0.8rem] px-[1.2rem] pb-[1.2rem] shadow-[var(--light-base)]-500/50'>
            <Image className="m-auto" src={'/mindxavatar.webp'} alt='imageCourse' width={200} height={200} />
            <div className="courseInfo mt-[1rem]">
                <h3 className='courseName text-[1.8rem] font-[600] px-[2.2rem]'>Khoá học: Web fullstack</h3>
                <p className='px-[2.2rem] mt-[1rem] flex items-center justify-between'>
                    <span><b>Mã</b>: Coding</span>
                    <Tag className='m-0' color="#87d068">Active</Tag>
                </p>
                <p className='px-[2.2rem] mt-[1rem] flex justify-between'>
                    <span><b>Giảng viên</b>: 30</span>
                    <span>4.5 <StarFilled className='text-[var(--orange-start)]' /></span>
                </p>
                <p className='px-[2.2rem] mt-[1rem] flex justify-between'>
                    <span><b>Đánh giá</b>: 3.4</span>
                    <div className='flex items-center'><StarRating rate={3} /></div>
                </p>
                <p className='px-[2.2rem] cursor-pointer mr-[2.2rem] mt-[1rem] border w-fit ml-auto bg-[var(--light-base)]'>
                    <InfoCircleOutlined /> <span>Chi tiết</span>
                </p>
            </div>
        </div>
    )
}

export default Course;