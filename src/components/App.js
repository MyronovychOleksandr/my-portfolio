import React, { Suspense } from "react";
import { Redirect, Route } from "react-router";
import Layout from "./Layout/Layout";
import Loader from "../components/Loader/Loader";
import { routes } from "../routes";

import "./App.css";

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        {routes.map(({ label, path, exact, component }) => (
          <Route key={label} path={path} exact={exact} component={component} />
        ))}
        <Redirect to="/" />
      </Suspense>
    </Layout>
  );
}

export default App;
