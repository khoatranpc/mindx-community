'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useUserInfo } from '@/utils/hooks';
import MindXLoading from '../MindXLoading';
import { queryUserInfo } from './query';

interface Props {
    children: React.ReactNode;
}
const AuthProtect = (props: Props) => {
    const router = useRouter();
    const userInfo = useUserInfo();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        if (!access_token) {
            router.replace('/auth/login');
            localStorage.removeItem('access_token');
        } else {
            userInfo.post?.({
                graphQl: {
                    query: queryUserInfo,
                    variables: {
                        currentUserIdInput: {
                            userId: ""
                        }
                    }
                }
            });
        }
    }, []);
    useEffect(() => {
        if (userInfo.state.statusCode === 401) {
            toast(userInfo.state.message as string, {
                type: 'error'
            });
            router.replace('/auth/login');
            localStorage.removeItem('access_token');
            userInfo.clear?.();
            // missing check has refresh token
        }
    }, [userInfo.state]);

    if (!userInfo.state.data && loading) {
        return <div className='min-h-screen'>
            <MindXLoading centered absolute />
        </div>;
    }
    return (
        props.children
    )
}

export default AuthProtect;