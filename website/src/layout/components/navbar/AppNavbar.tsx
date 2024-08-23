import React from "react";
import { Layout } from "antd";
import { MenuList } from "../menuList/MenuList";
import { NavbarLogo } from "./logo/NavbarLogo";

interface SiderProps {
  collapsed: boolean;
  darkTheme: boolean;
}

export const AppNavbar: React.FC<SiderProps> = ({ collapsed, darkTheme }) => {
  return (
    <Layout.Sider
      collapsed={collapsed}
      collapsible
      trigger={null}
      className={`navbar ${darkTheme ? "dark-mode" : "light-mode"}`}
    >
      <NavbarLogo />
      <MenuList darkTheme={darkTheme} />
    </Layout.Sider>
  );
};
