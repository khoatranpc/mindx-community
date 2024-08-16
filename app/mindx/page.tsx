import React from 'react';
import Image from 'next/image';
import MindXLoading from '@/components/MindXLoading';

const Community = () => {
    return (
        <div className='h-[100vh] flex gap-[1.2rem] justify-center items-center'>
            <Image src={'/sync.jpg'} alt='Redirect' width={500} height={500} />
            <MindXLoading />
            <span className='text-[4.2rem]'>Bạn đang được chuyển hướng</span>
        </div>
    )
}

export default Community;