'use client';
import React from 'react';
import { SpinProps, Table as TableAntd, TableProps } from 'antd';
import MindXLoading from '../MindXLoading';
import './styles.scss';

interface Props extends TableProps {
    defaultPagination?: boolean;
}
const Table = (props: Props) => {
    return (
        <TableAntd
            size="small"
            className="antTable"
            {...props}
            loading={{
                spinning: typeof props.loading === 'boolean' ? !!props.loading : false,
                indicator: <MindXLoading centered absolute className="w-[3rem!important] h-[3rem!important] p-[0.8rem]" />,
                ...typeof props.loading !== 'boolean' ? {
                    ...props.loading as SpinProps,
                } : {},
            }}
            {...props.defaultPagination ? {
                pagination: {
                    size: "small",
                    onChange(page, pageSize) {
                        console.log(page, pageSize);
                    },
                    pageSize: 5,
                    showSizeChanger: true,
                    showTotal(total, range) {
                        return 10
                    },
                    pageSizeOptions: ['5', '10'],
                    locale: {
                        items_per_page: ""
                    },
                    ...props.pagination
                }
            } : {}}

        />
    )
}

export default Table;