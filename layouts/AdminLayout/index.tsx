'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Image, Layout, Menu, MenuProps, theme } from 'antd';
import { CalendarOutlined, ContactsOutlined, HomeOutlined, OrderedListOutlined, SnippetsOutlined, TeamOutlined, UserAddOutlined } from '@ant-design/icons';
import { routerByPage } from '@/global/routers';
import { Page } from '@/global/enum';
import HeaderAdminLayout from './HeaderLayout';

const { Header, Content, Footer, Sider } = Layout;


interface Props {
    children: React.ReactNode;
}
const items: MenuProps['items'] = [
    {
        key: Page.AdminDashboard,
        label: <p><HomeOutlined /> <span>Dashboard</span></p>,
    },
    {
        key: 'Student',
        label: <p><ContactsOutlined /> <span>Học sinh</span></p>,
        children: [
            {
                key: Page.AdminListStudent,
                label: <p><OrderedListOutlined /> <span>Danh sách</span></p>
            },
            {
                key: Page.AdminWaiting,
                label: <p><UserAddOutlined /> <span>Đợi duyệt</span></p>
            },
        ]
    },
    {
        key: 'AdminLecture',
        label: <p><TeamOutlined /> <span>Giảng viên</span></p>,
        children: [
            {
                key: Page.AdminLecture,
                label: <p><OrderedListOutlined /> <span>Danh sách</span></p>
            },
        ]
    },
    {
        key: Page.AdminCourses,
        label: <p><SnippetsOutlined /> <span>Khoá học</span></p>
    },
    {
        key: 'Calenar',
        label: <p><CalendarOutlined /> <span>Sự kiện</span></p>
    },
];

const AdminLayout = (props: Props) => {
    const router = useRouter();
    const pathRouter = usePathname();
    const getActive = Object.keys(routerByPage).find((item) => routerByPage[item as Page] === pathRouter);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout
            className='min-h-screen'
        >
            <Sider
                className="bg-[white!important]"
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" >
                    <Image src='/mindx.png' preview={false} className='cursor-pointer px-[3.2rem] py-[1.2rem]' onClick={() => {
                        router.push('/mindx/admin');
                    }} />
                </div>
                <Menu
                    mode="inline"
                    items={items}
                    onClick={(info) => {
                        router.push(routerByPage[info.key as Page]);
                    }}
                    defaultSelectedKeys={[getActive as string ?? '']}
                />
            </Sider>
            <Layout
                className="bg-[#f4e5e5]"
            >
                <Header className='sticky top-0 z-[10]' style={{ padding: 0, background: colorBgContainer }} >
                    <HeaderAdminLayout />
                </Header>
                <Content style={{ margin: '24px 16px' }}>
                    <div
                        className="min-h-full relative"
                        style={{
                            padding: 24,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }} className="p-[0.4rem] bg-[white] sticky bottom-0">
                    MindX Technology School ©{new Date().getFullYear()} Created by R&D 18+
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;