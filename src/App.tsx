import { Routes, Route } from 'react-router-dom';

import routes from 'routes/routes';
import { MainLayout } from 'components/layouts';
import { PageWrapper } from 'components/common';

import './App.scss';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map((route) => {
            const Page = route.component;

            return route.isIndex ? (
              <Route
                index
                key={route.id}
                element={
                  route.state ? (
                    <PageWrapper state={route.state}>
                      <Page />
                    </PageWrapper>
                  ) : (
                    <Page />
                  )
                }
              />
            ) : (
              <Route
                key={route.id}
                path={route.path}
                element={
                  route.state ? (
                    <PageWrapper state={route.state}>
                      <Page />
                    </PageWrapper>
                  ) : (
                    <Page />
                  )
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
};

export default App;
