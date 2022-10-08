import React from 'react';
import './index.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

const Sidebar = () => {
    return (
        <div>
            <ProSidebar>
                <SidebarHeader>
                    ProSidebar
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape='circle'>
                        <MenuItem>Dashboard</MenuItem>
                        <MenuItem>Components</MenuItem>
                    </Menu>
                    <Menu iconShape='circle'>
                        <SubMenu title='With Suffix' >
                            <MenuItem>Submenu 1</MenuItem>
                            <MenuItem>Submenu 2</MenuItem>
                            <MenuItem>Submenu 3</MenuItem>
                        </SubMenu>
                        <SubMenu title='With Suffix' >
                            <MenuItem>Submenu 1</MenuItem>
                            <MenuItem>Submenu 2</MenuItem>
                            <MenuItem>Submenu 3</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    SidebarFooter
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

export default Sidebar;