import React from 'react';
import AuthProtect from '@/components/AuthProtect';

interface Props {
    children: React.ReactNode;
}
const CommunityLayout = (props: Props) => {
    return (
        <AuthProtect>
            {props.children}
        </AuthProtect>
    );
}

export default CommunityLayout;