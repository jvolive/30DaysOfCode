import { Layout } from "antd";
import { ReactNode } from "react";
import { AppNavbar } from "./components/navbar/AppNavbar";
import { Content } from "antd/es/layout/layout";
import { AppFooter } from "./components/footer/AppFooter";
import { useCollapsed } from "../hooks/useCollapsed";
import { useDarkTheme } from "../hooks/useDarkTheme";
import { AppHeader } from "./components/header/AppHeader";

interface MainLayoutProps {
  children: ReactNode;
}
export function MainLayout({ children }: MainLayoutProps) {
  const { collapsed, btnCollapsed } = useCollapsed();
  const { darkTheme, btnTheme } = useDarkTheme();

  return (
    <Layout>
      <AppNavbar collapsed={collapsed} darkTheme={darkTheme} />
      <Layout>
        <AppHeader
          collapsed={collapsed}
          setCollapsed={btnCollapsed}
          darkTheme={darkTheme}
          toggleTheme={btnTheme}
          colorBgContainer="#ffffff"
        />
        <Content>{children}</Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}
