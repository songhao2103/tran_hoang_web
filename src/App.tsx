import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/router.config";
import DefaultLayout from "./layouts/DefaultLayout";
import { Fragment } from "react/jsx-runtime";
import { ROUTE_PATH } from "./routes/routePath";
import NotFound from "./components/errors/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;

          const Layout =
            route.layout === null ? Fragment : route.layout || DefaultLayout;

          return (
            <Route
              path={route.path}
              key={index}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
