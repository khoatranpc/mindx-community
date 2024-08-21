'use client';
import React, { memo, useEffect, useRef } from 'react';
import { InfoCircleOutlined, PinterestOutlined } from '@ant-design/icons';
import { useSearchParams } from 'next/navigation';
import { useFormik } from 'formik';
import { Button, Input } from 'antd';
import { toast } from 'react-toastify';
import { Obj } from '@/global/interface';

import { HookRedux, uuid } from '@/utils';
import { useMailTemplate } from '@/utils/hooks';
import ComposingMail from '../ComposingMail';
import { queryGetOneMailTemplate, querySaveMailTemplate } from './query';

interface Props {
    isCreate?: boolean;
    mailTemplate: HookRedux;
    componentId?: string;
}
const MailDetail = (props: Props) => {
    const queryRouter = useSearchParams();
    const getMailId = queryRouter.get('mailId');
    const componentId = useRef(uuid());
    const getCrrMailTemplate = (!props.isCreate && getMailId) ? (props.mailTemplate.state.data?.getOneMail as Obj) : {};
    const saveMailTemplate = useMailTemplate();

    const { values, setValues, handleSubmit, setFieldValue, handleChange } = useFormik({
        initialValues: {
            title: getCrrMailTemplate?.title ?? '',
            html: getCrrMailTemplate?.html ?? '',
            isDelete: getCrrMailTemplate?.isDelete ?? '',
        },
        onSubmit(values) {
            saveMailTemplate.post?.({
                graphQl: {
                    query: querySaveMailTemplate,
                    variables: {
                        dataInput: {
                            id: getMailId,
                            ...values
                        }
                    }
                },
                componentId: componentId.current
            });
        }
    });
    useEffect(() => {
        if (saveMailTemplate.state.componentId === componentId.current) {
            if (saveMailTemplate.state.data?.findMailTemplateByIdAndUpdate) {
                toast(saveMailTemplate.state.message, {
                    type: saveMailTemplate.state.success ? 'success' : 'error'
                });
                saveMailTemplate.clear?.();
            }
        }
    }, [saveMailTemplate.state.data]);
    useEffect(() => {
        if (props.mailTemplate.state.data?.getOneMail && (props.componentId === props.mailTemplate.state.componentId)) {
            setValues({
                title: getCrrMailTemplate?.title ?? '',
                html: getCrrMailTemplate?.html ?? '',
                isDelete: getCrrMailTemplate?.isDelete ?? '',
            });
        }
    }, [props.mailTemplate.state.data]);
    return <div className='mailDetail flex gap-[2.4rem]'>
        <div className="mail flex-1">
            <div className='titleMail mb-[1.2rem]'>
                <Input size='small' placeholder='Tiêu đều email!' value={values.title} name='title' onChange={handleChange} />
            </div>
            <ComposingMail
                value={values.html}
                onChange={(value) => {
                    setFieldValue('html', value);
                }}
            />
            <div className='flex justify-end mt-[1.2rem]'>
                <Button className='' size='small' loading={saveMailTemplate.state.isLoading} disabled={saveMailTemplate.state.isLoading} onClick={() => handleSubmit()}>Lưu</Button>
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