import React from "react";
import Layout from "./layout/Layout";
import Dashboard from "./views/Dashboard";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
