import { useState } from "react";

export const useCollapsed = () => {
  const [collapsed, setCollapsed] = useState(true);

  const btnCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return { collapsed, btnCollapsed };
};
