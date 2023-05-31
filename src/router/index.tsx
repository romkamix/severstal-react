import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { CenteredLayout, DefaultLayout, LoginLayout } from "../layouts";
import {
  HomeView,
  LoginView,
  NewsView,
  NoMatchView,
  PostView,
  ProfileView,
} from "../views";
import RedirectIfAuthenticatedRoute from "./RedirectIfAuthenticatedRoute";
import ProtectedRoute from "./ProtectedRoute";

const Router: FC = () => {
  return (
    <Routes>
      <Route element={<CenteredLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/news/:id" element={<PostView />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfileView />} />
        </Route>

        <Route path="*" element={<NoMatchView />} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path="/news" element={<NewsView />} />
      </Route>

      <Route element={<LoginLayout />}>
        <Route element={<RedirectIfAuthenticatedRoute />}>
          <Route path="/login" element={<LoginView />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;

export { default as ProtectedRoute } from "./ProtectedRoute";
export { default as RedirectIfAuthenticatedRoute } from "./RedirectIfAuthenticatedRoute";
