import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="Layout">
      <main>
        <Header />
        <Breadcrumbs />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
