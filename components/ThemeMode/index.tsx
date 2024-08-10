import React from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Obj } from '@/global/interface';
import { Theme } from '@/global/enum';
import { useTheme } from '@/utils/hooks';

const getIconTheme: Record<Theme, React.ReactNode> = {
    DARK: <MoonOutlined />,
    LIGHT: <SunOutlined />
}
const ThemeMode = () => {
    const theme = useTheme();
    const getCrrTheme = (theme.data as Obj)?.mode as Theme ?? Theme.LIGHT;
    const items: MenuProps['items'] = Object.keys(getIconTheme).map((item) => {
        return {
            key: item,
            label: getIconTheme[item as Theme],
            onClick() {
                theme.change(item as Theme);
            }
        }
    });
    return (
        <Dropdown
            placement="bottomCenter"
            menu={{ items }}
        >
            <Button size='small' className='w-[3rem] h-[3rem] rounded-full'>{getIconTheme[getCrrTheme]}</Button>
        </Dropdown>
    )
}

export default ThemeMode;