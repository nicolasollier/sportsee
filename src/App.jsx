import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import "./styles/styles.scss";

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
      {
        path: "/dashboard/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/:userId",
        element: <Dashboard />,
      },
    ],
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
