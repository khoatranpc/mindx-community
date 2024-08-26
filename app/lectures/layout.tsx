'use client';
import { LazyImport } from "@/utils/dynamicImport";
import React from "react";

interface Props {
    chidlren: React.ReactNode;
}
const IntroLayout = (props: Props) => {
    const Layout = LazyImport('LAYTOUTS', 'IntroduceLayout', props);
    return <Layout />;
}

export default IntroLayout;