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
        //??????????????????????????????  
        navigateTo(e.key);
    }

    //???????????????????????????
    let firstOpenKey: string = '';
    function findKey(obj: { key: string }) {
        return obj.key === routes.pathname
    }

    //??????items
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string
            break;
        }
    }

    //??????????????????????????????
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const onOpenChange = (keys: string[]) => {
        //????????????????????????????????????
        setOpenKeys([keys[keys.length - 1]]);
    }

    return <Menu
        theme="dark"
        // defaultSelectedKeys ??????????????????????????????
        defaultSelectedKeys={[routes.pathname]}
        mode="inline"
        // ???????????????
        items={items}
        onClick={menuClick}
        // ????????????????????????????????????
        openKeys={openKeys}
        // ????????????????????????????????????
        onOpenChange={onOpenChange}
    />
}

export default Comp;