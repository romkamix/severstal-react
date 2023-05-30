import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="layout-login">
      <div className="layout-login__content">
        <Outlet />
      </div>
    </div>
  );
}

export default LoginLayout;
