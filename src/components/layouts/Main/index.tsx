import { Outlet } from 'react-router-dom';

import { Footer } from 'components/common';

const MainLayout = () => {
  return (
    <>
      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;
