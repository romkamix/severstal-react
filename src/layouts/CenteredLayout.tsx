import { Outlet } from "react-router-dom";
import { Nabvar } from "../components";

function CenteredLayout() {
  return (
    <div className="layout-centered">
      <div className="layout-centered__navbar">
        <Nabvar />
      </div>

      <div className="layout-centered__content">
        <div className="layout-centered__wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CenteredLayout;
