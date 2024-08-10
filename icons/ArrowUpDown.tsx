import React from 'react';
import { Obj } from '@/global/interface';

const ArrowUpDown = (props: React.HTMLAttributes<Obj>) => {
    return (
        <svg width="20px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M7 4V20M7 20L3 16M7 20L11 16M17 4V20M17 4L21 8M17 4L13 8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ArrowUpDown;