import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "~/screens/home/index";

import SidebarLayout from "~/layouts/WithSidebar/index";

const withLayout = (Layout: any, Component: React.FC) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={withLayout(SidebarLayout, Home)} />
    </Routes>
  </HashRouter>
);
