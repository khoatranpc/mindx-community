import React from 'react';
import { ColumnsType } from 'antd/es/table';
import Table from '@/components/Table';
import './styles.scss';
import StarRating from '@/components/StarRating';
import { Button, Divider, Input, Tag } from 'antd';

const AdminLectures = () => {
    const dataSource = [
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
        {
            a: 'Nguyễn Văn A'
        },
    ]
    const columns: ColumnsType = [
        {
            key: 'FullName',
            dataIndex: 'a',
            title: 'Họ tên',
            render(_, record) {
                return <div className="flex items-center gap-[1.2rem]">
                    <div className="img w-[5rem]">
                        <img src="/mindxavatar.webp" alt="" className="max-w-full rounded-full" />
                    </div>
                    <div className="user">
                        <p>Ngyễn Văn A</p>
                        <p className="email">nguyenvana@gmail.com</p>
                    </div>
                </div>
            }
        },
        {
            key: 'Status',
            dataIndex: 't',
            title: 'Trạng thái',
            render() {
                return <Tag color="#87d068">Hoạt động</Tag>
            }
        },
        {
            key: 'Position',
            title: 'Vị trí',
            dataIndex: 'a',
            render() {
                return <div className="flex flex-col">
                    <p>Giảng viên</p>
                    <p>Coding</p>
                </div>
            }
        },
        {
            key: 'Rating',
            title: 'Đánh giá',
            render() {
                return <div>
                    <span>3.5</span>
                    <StarRating rate={3} />
                </div>
            }
        }
    ]
    return (
        <div className='lectures flex gap-[1.2rem]'>
            <div className="filter flex-[0.2] border-r-[0.4px] border-r-[black] border-solid">
                <p className='font-bold'>Bộ lọc</p>
            </div>
            <div className="tableView flex-1">
                <div className='search flex justify-between mb-[1.2rem]'>
                    <Input className='max-w-[25rem]' size='small' placeholder='Search' />
                    <Button size='small'>Tạo mới</Button>
                </div>
                <Table
                    // loading
                    columns={columns}
                    dataSource={dataSource}
                    onChange={(pagination) => {
                        console.log(pagination);
                    }}
                    defaultPagination
                    pagination={{
                        pageSize: 10
                    }}
                />
            </div>
        </div>
    )
}

export default AdminLectures;