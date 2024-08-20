'use client';
import React, { memo, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Obj } from '@/global/interface';
import { HookRedux, uuid } from '@/utils';
import MindXLoading from '@/components/MindXLoading';
import FingerPointer from '@/icons/FingerPointer';
import { queryListMailTemplate } from './query';

interface Props {
    mailTemplate: HookRedux;
    componentId?: string;
}
const List = (props: Props) => {
    const router = useRouter();
    const queryRouter = useSearchParams();
    const getMailId = queryRouter.get('mailId');
    return props.mailTemplate.state.isLoading ? <MindXLoading /> :
        <ul className="listMail mt-[1.2rem]">
            {(props.mailTemplate.state.data?.getListMail as Obj[])?.map((item) => {
                return <li
                    className={`itemMailTemplate flex items-center justify-between border rounded-lg border-[var(--light-base)] px-[1.2rem] py-[0.5rem] cursor-pointer transition-[0.3s] opacity-[0.7] hover:bg-[var(--light-base)] hover:opacity-[1] ${getMailId === item._id ? 'opacity-[1] bg-[var(--light-base)]' : ''}`} key={item._id as string}
                    onClick={() => {
                        router.replace(`/mindx/admin/mails/templates?mailId=${item._id as string}`);
                    }}
                >
                    <span>{item.title as string}</span>
                    <FingerPointer className={`w-[2rem] h-[2rem] iconFinger fill-[var(--base)] ${getMailId === item._id ? 'active' : ''}`} />
                </li>
            })}
        </ul>
}

const MemoList = memo(List, (prevProps, nextProps) => {
    if (!prevProps.mailTemplate.state.componentId || (nextProps.mailTemplate.state.componentId === prevProps.componentId)) {
        return false;
    }
    return true;
});

const BoundaryList = (props: Props) => {
    const listMailTemplate = props.mailTemplate;
    const componentId = useRef(uuid());
    useEffect(() => {
        listMailTemplate.post?.({
            graphQl: {
                query: queryListMailTemplate(['title', 'isDelete']),
                variables: {}
            },
            componentId: componentId.current
        });
    }, []);
    return <MemoList mailTemplate={listMailTemplate} componentId={componentId.current} />
}
export default BoundaryList;