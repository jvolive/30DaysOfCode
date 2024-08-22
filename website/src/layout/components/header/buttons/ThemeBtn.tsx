import React from "react";
import { Button } from "antd";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import "./index.scss";

interface ThemeBtnProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeBtn: React.FC<ThemeBtnProps> = ({
  darkTheme,
  toggleTheme,
}) => {
  return (
    <div className="theme-btn">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};
