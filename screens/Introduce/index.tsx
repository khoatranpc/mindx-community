'use client';
import { motion, useScroll } from "framer-motion";
import Typewriter from 'typewriter-effect';
import React from 'react';
import Header from './Header';
import './styles.scss';

const Introduce = () => {
    const { scrollYProgress } = useScroll();
    return (

        <div className='introducePage'>
            <motion.div className="progress-bar bg-[var(--base)]" style={{ scaleX: scrollYProgress }} > </motion.div>
            <Header />
            <div className="banner p-[5.6rem]">
                <div className="row flex items-center gap-[2.4rem]">
                    <div className="des w-[70%]">
                        <h1 className="text-[3.2rem] font-medium mb-[2.4rem]"><span className="text-[var(--base)] font-bold">MindX Community</span> - Cộng đồng MindX</h1>
                        <p className="text-[2.8rem]  mb-[1.2rem]">
                            Nền tảng dành cho học viên của MindX
                            <span>
                                <Typewriter
                                    options={{
                                        strings: ['Giao lưu', 'Chia sẻ kinh nghiệm', 'Kết nối Giảng viên, Doanh nghiệp'],
                                        autoStart: true,
                                        delay: 0.1,
                                        loop: true,
                                        deleteSpeed: 0,
                                        wrapperClassName: 'font-bold text-[var(--base)]'
                                    }}
                                />
                            </span>
                        </p>
                        <p className="text-[var(--bs-color)] text-[1.8rem]">Xuất phát từ nhu cầu kết nối, học hỏi từ học viên của MindX, nền tảng được xây dựng với mục tiêu là cánh cổng giúp học viên, doanh nghiệp, giảng viên có thể kết nối, chia sẻ với nhau</p>
                    </div>
                    <div className="img w-[50%]">
                        <img className="max-w-full" src="/newBanner.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Introduce;