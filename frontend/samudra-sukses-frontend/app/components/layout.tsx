import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
