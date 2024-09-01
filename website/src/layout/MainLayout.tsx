import { Layout } from "antd";
import { ReactNode } from "react";
import { Content } from "antd/es/layout/layout";
import { AppFooter } from "./components/footer/AppFooter";
import { useCollapsed } from "../hooks/useCollapsed";
import { useDarkTheme } from "../hooks/useDarkTheme";
import { AppHeader } from "./components/header/AppHeader";
import { AppNav } from "./components/navbar/AppNavbar";

interface MainLayoutProps {
  children: ReactNode;
}
export function MainLayout({ children }: MainLayoutProps) {
  const { collapsed, btnCollapsed } = useCollapsed();
  const { darkTheme, btnTheme } = useDarkTheme();

  return (
    <Layout>
      <AppNav collapsed={collapsed} darkTheme={darkTheme} />
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
