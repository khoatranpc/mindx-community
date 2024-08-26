'use client';
import React from 'react';
import { motion, useScroll } from "framer-motion";
import Header from '@/screens/Introduce/Header';
import Footer from '@/screens/Introduce/Footer';

interface Props {
    children: React.ReactNode;
}
const IntroduceLayout = (props: Props) => {
    const { scrollYProgress } = useScroll();
    return (
        <div className="introducePage max-w-screen-2xl m-auto">
            <motion.div
                className="progress-bar bg-[var(--base)] max-w-screen-2xl m-auto z-50 left-[unset!important]"
                style={{ scaleX: scrollYProgress }}
            >
                {" "}
            </motion.div>
            <Header />
            <div className="content w-full">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default IntroduceLayout;