import React from 'react';
import './styles.scss';

interface Props {
    children: React.ReactElement;
}

const AuthLayout = (props: Props) => {
    return (
        <div className={`authLayout min-h-screen w-screen flex justify-center p-16`}>
            <div className="bannerLog flex-1 min-h-full">
            </div>
            <div className="contentAuth flex-[0.5]">
                <div className="login h-full rounded-[8px] bg-[white] p-[2.5rem] flex flex-col relative">
                    <div className={`logo absolute right-[2.5rem]`}>
                        <img src="/mindx.png" alt="" className="w-[10rem]" />
                    </div>
                    <h1 className="text-[3.6rem]">Chào mừng đến với <br /> <span className="font-bold text-[var(--base)] text-[4.8rem]">MindX Community</span></h1>
                    <div className="form mt-[3.6rem]">
                        {props.children}
                    </div>
                    <div className="copyright flex items-end justify-between mt-auto">
                        <p className='flex items-end'>
                            <img src="/logo.png" alt="" className="w-[3rem]" /> <span className="text-[12px] font-medium">Mindx Technology School</span>
                        </p>
                        <p className="text-[12px] font-medium">Copyright © {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;