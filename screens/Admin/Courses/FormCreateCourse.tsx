'use client';
import React from 'react';
import { Button, Form, Input } from 'antd';
import './styles.scss';
import { useFormik } from 'formik';
import { SaveOutlined, UndoOutlined } from '@ant-design/icons';

const FormCreateCourse = () => {
    const { handleSubmit, values, handleChange, } = useFormik({
        initialValues: {
            name: '',
            code: '',
            des: ''
        },
        onSubmit(values) {

        }
    });

    return (
        <div className='formCreateCourse'>
            <Form
                layout='vertical'
            >
                <Form.Item
                    label="Tên khoá học"
                    name='name'
                    required
                    rules={[{ required: true, message: 'Chưa điền tên khoá học!' }]}
                >
                    <Input size='small' name='name' value={values.name} />
                </Form.Item>
                <Form.Item
                    label="Mã khoá học"
                    required
                    name='code'
                    rules={[{ required: true, message: 'Chưa điền mã khoá học!' }]}
                >
                    <Input size='small' name='code' value={values.code} />
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    required
                    name='des'
                    rules={[{ required: true, message: 'Chưa điền mô tả khoá học!' }]}
                >
                    <Input.TextArea size='small' name='des' value={values.des} />
                </Form.Item>
                <Form.Item>
                    <Button size='small'><UndoOutlined /> Reset</Button>
                    <Button size='small' htmlType='submit' className='float-right'><SaveOutlined /> Lưu</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default FormCreateCourse;