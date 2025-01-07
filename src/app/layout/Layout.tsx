import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import { Sidebar } from 'widgets/sidebar';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="layout">
      <main className="container">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
