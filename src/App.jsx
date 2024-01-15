import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import Dashboard from "./views/Dashboard";
import "./styles/styles.scss";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
