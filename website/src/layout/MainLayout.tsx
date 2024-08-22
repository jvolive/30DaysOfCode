import { Layout } from "antd";
import { ReactNode } from "react";
import { AppNavbar } from "./components/navbar/AppNavbar";
import { Content } from "antd/es/layout/layout";
import { AppFooter } from "./components/footer/AppFooter";

interface MainLayoutProps {
  children: ReactNode;
}
export function MainLayout({ children }: MainLayoutProps) {
  const { collapsed, toggleCollapsed } = useCollapsed();
  const { darkTheme, toggleTheme } = useDarkTheme();

  return (
    <Layout>
      <AppNavbar collapsed={collapsed} darkTheme={darkTheme} />
      <Layout>
        <Content>{children}</Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}
