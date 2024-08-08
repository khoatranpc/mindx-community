import React from 'react';
import { Obj } from '@/global/interface';
import './styles.scss';

interface Props extends React.HTMLAttributes<Obj> {
    centered?: boolean;
    absolute?: boolean;
}

const MindXLoading = (props: Props) => {
    return (
        <div className={`w-[2.8rem] rounded-full p-[1rem] box-content ${props.absolute ? 'absolute' : 'relative'} flex justify-between items-center ${props.centered ? 'top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ' : ''} mindxLoading ${props.className}`}>
            <div className='rounded-full animate-spin border-t-[1px] border-solid border-[var(--base)] w-full h-full absolute top-0 left-0'></div>
            <img src="/logo.png" className="w-full" />
        </div>
    )
}

export default MindXLoading;