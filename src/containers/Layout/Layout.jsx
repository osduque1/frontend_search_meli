import "./Layout.scss";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Outlet } from "react-router-dom";

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
