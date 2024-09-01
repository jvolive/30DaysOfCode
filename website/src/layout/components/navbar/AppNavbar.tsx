import React from "react";
import Sider from "antd/es/layout/Sider";
import { MenuList } from "../menuList/MenuList";
import { NavLogo } from "./logo/NavbarLogo";
import "./navbar.scss";
import { ConfigProvider } from "antd";

interface NavProps {
  collapsed: boolean;
  darkTheme: boolean;
}

export const AppNav: React.FC<NavProps> = ({ collapsed, darkTheme }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 2,
        },
      }}
    >
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
        style={{
          backgroundColor: darkTheme ? "#0d4701" : undefined,
        }}
      >
        <NavLogo />
        <MenuList darkTheme={darkTheme} />
      </Sider>
    </ConfigProvider>
  );
};
