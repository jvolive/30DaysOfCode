import { useState } from "react";

export const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const btnTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return { darkTheme, btnTheme };
};
