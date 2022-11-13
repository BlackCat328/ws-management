import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('Option 1', '/page1', <PieChartOutlined />),
//     getItem('Option 2', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

const items: MenuItem[] = [
    {
        label: 'Option 1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: 'Option 2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: 'User',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: 'Tom',
                key: '/page3/page3_1',
            },
            {
                label: 'Bill',
                key: '/page3/page3_2',
            },
            {
                label: 'Alex',
                key: '/page3/page3_3',
            }
        ]
    },
    {
        label: 'Team',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: 'Team1',
                key: '/page4/page4_1',
            },
            {
                label: 'Team2',
                key: '/page4/page4_2',
            }
        ]
    },
    {
        label: 'Files',
        key: '/page5',
        icon: <FileOutlined />
    }
]

const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    const routes = useLocation()

    const menuClick = (e: { key: string }) => {
        //点击跳转到对应的路由  
        navigateTo(e.key);
    }

    //菜单默认展开初始值
    let firstOpenKey: string = '';
    function findKey(obj: { key: string }) {
        return obj.key === routes.pathname
    }

    //遍历items
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string
            break;
        }
    }

    //控制菜单展开的初始值
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const onOpenChange = (keys: string[]) => {
        //把这个数组修改成最后一项
        setOpenKeys([keys[keys.length - 1]]);
    }

    return <Menu
        theme="dark"
        // defaultSelectedKeys 当前样式所在的选中项
        defaultSelectedKeys={[routes.pathname]}
        mode="inline"
        // 菜单栏数据
        items={items}
        onClick={menuClick}
        // 当前菜单展开和回收的事件
        openKeys={openKeys}
        // 某项菜单展开和回收的事件
        onOpenChange={onOpenChange}
    />
}

export default Comp;