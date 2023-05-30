import { Outlet } from "react-router-dom";
import { Nabvar } from "../components";

function DefaultLayout() {
  return (
    <div className="layout-default">
      <div className="layout-default__navbar">
        <Nabvar />
      </div>

      <div className="layout-default__content">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
