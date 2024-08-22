import React from "react";
import { FundProjectionScreenOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import "./MenuList.scss";

interface MenuListProps {
  darkTheme: boolean;
}

export const MenuList: React.FC<MenuListProps> = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/homepage">Home</Link>
      </Menu.Item>
      <Menu.Item key="new-project" icon={<FundProjectionScreenOutlined />}>
        <Link to="/projects">Projects</Link>
      </Menu.Item>
    </Menu>
  );
};
