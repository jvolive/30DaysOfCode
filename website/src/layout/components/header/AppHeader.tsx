import React from "react";
import { Header } from "antd/es/layout/layout";
import { MenuBtn } from "./buttons/MenuBtn";
import { ThemeBtn } from "./buttons/ThemeBtn";
import { Menu } from "antd";
import "./header.scss"; // Certifique-se de que o arquivo SCSS está importado

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  colorBgContainer: string;
  darkTheme: boolean;
  toggleTheme: () => void;
}

export const AppHeader: React.FC<HeaderProps> = ({
  collapsed,
  setCollapsed,
  darkTheme,
  toggleTheme,
  colorBgContainer,
}) => {
  return (
    <Header
      className={`app-header ${collapsed ? "collapsed" : ""}`}
      style={{ background: colorBgContainer }}
    >
      <Menu
        mode="horizontal"
        theme={darkTheme ? "dark" : "light"}
        className="header-menu"
      >
        <Menu.Item key="menu-btn" className="menu-btn">
          <MenuBtn
            collapsed={collapsed}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Menu.Item>
      </Menu>
      <ThemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </Header>
  );
};
