import React, { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './Navbar';

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
