import React from "react";
import { MenuList } from "../menuList/MenuList";
import { NavbarLogo } from "./logo/NavbarLogo";
import Sider from "antd/es/layout/Sider";

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
      className={`navbar ${darkTheme ? "dark-mode" : "light-mode"}`}
    >
      <NavbarLogo />
      <MenuList darkTheme={darkTheme} />
    </Sider>
  );
};
