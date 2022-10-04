import "./Layout.scss";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout">
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
