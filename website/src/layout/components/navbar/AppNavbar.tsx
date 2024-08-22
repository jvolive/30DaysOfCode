import React from "react";
import Sider from "antd/es/layout/Sider";

import { MenuList } from "../menuList/MenuList";

interface SiderProps {
  collapsed: boolean;
  darkTheme: boolean;
}

export const AppNavbar: React.FC<SiderProps> = ({ collapsed, darkTheme }) => {
  return (
    <Sider
      collapsed={collapsed}
      collapsible
      trigger={null}
      theme={darkTheme ? "dark" : "light"}
      className="sidebar"
    >
      <MenuList darkTheme={darkTheme} />
    </Sider>
  );
};
