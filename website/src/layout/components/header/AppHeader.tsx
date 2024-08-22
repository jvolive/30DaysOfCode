import React from "react";
import { Header } from "antd/es/layout/layout";
import { MenuBtn } from "./buttons/MenuBtn";
import { ThemeBtn } from "./buttons/ThemeBtn";
import "./Header.scss";

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
    <Header className="toggle-menu" style={{ background: colorBgContainer }}>
      <div>
        <MenuBtn
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div className="toggle-theme">
        <ThemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </div>
    </Header>
  );
};
