'use client';
import React, { memo, useEffect, useRef, useState } from 'react';
import { InfoCircleOutlined, PinterestOutlined } from '@ant-design/icons';
import { useSearchParams } from 'next/navigation';
import { Button, Input } from 'antd';
import ReactQuill from 'react-quill';
import { HookRedux, uuid } from '@/utils';
import { queryGetOneMailTemplate } from './query';
import { Obj } from '@/global/interface';
import { useFormik } from 'formik';

interface Props {
    isCreate?: boolean;
    mailTemplate: HookRedux;
    componentId?: string;
}
const MailDetail = (props: Props) => {
    const queryRouter = useSearchParams();
    const getMailId = queryRouter.get('mailId');
    const getCrrMailTemplate = (!props.isCreate && getMailId) ? (props.mailTemplate.state.data?.getOneMail as Obj) : {};
    const { values, setValues } = useFormik({
        initialValues: {
            title: getCrrMailTemplate?.title ?? '',
            html: getCrrMailTemplate?.html ?? ''
        },
        onSubmit(values) {

        }
    });
    useEffect(() => {
        if (props.mailTemplate.state.data?.getOneMail && (props.componentId === props.mailTemplate.state.componentId)) {
            setValues({
                title: getCrrMailTemplate?.title ?? '',
                html: getCrrMailTemplate?.html ?? ''
            });
        }
    }, [props.mailTemplate.state.data]);
    return <div className='mailDetail flex gap-[2.4rem]'>
        <div className="mail flex-1">
            <div className='titleMail mb-[1.2rem]'>
                <Input size='small' placeholder='Tiêu đều email!' value={values.title} />
            </div>
            <ReactQuill theme="snow" value={values.html} />
            <div className='flex justify-end mt-[1.2rem]'>
                <Button className='' size='small'>Lưu</Button>
            </div>
        </div>
        <div className="contentInstruction max-w-[24rem] shadow-xl p-[2.4rem] relative">
            <PinterestOutlined className='text-[var(--base)] absolute top-[-0.5rem] right-[-0.5rem]' />
            <p><InfoCircleOutlined className='text-orange-400 font-bold' /> <span><strong>Lưu ý:</strong></span></p>
            <p>Để hệ thống tự động điền thông tin chính xác vào vị trí trong đoạn văn, hãy sử dụng cú pháp: <b>{"{{REPLACE}}"}</b> tại vị trí cần điền!</p>
        </div>
    </div>
}



const MemoMailForm = memo(MailDetail, (prevProps, nextProps) => {
    if (!prevProps.mailTemplate.state.componentId || (nextProps.mailTemplate.state.componentId === prevProps.componentId)) {
        return false;
    }
    return true;
});

const BoundaryMailDetail = (props: Props) => {
    const componentId = useRef(uuid());
    const queryRouter = useSearchParams();
    const getMailId = queryRouter.get('mailId');

    useEffect(() => {
        if (getMailId) {
            props.mailTemplate.post?.({
                graphQl: {
                    query: queryGetOneMailTemplate(getMailId),
                    variables: {}
                },
                componentId: componentId.current
            })
        }
    }, [getMailId]);
    return <MemoMailForm {...props} componentId={componentId.current} />;
}
export default BoundaryMailDetail;