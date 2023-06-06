import { Route, Routes } from "react-router-dom";
import { AuthLayouts } from "../../layouts/AuthLayouts/AuthLayouts";
import { lazy, Suspense } from "react";

const LoginView = lazy(() => import("./Views/LoginView/LoginView"));
const RegisterView = lazy(() => import("./Views/RegisterView/RegisterView"));

export default function AuthView() {
  return (
    <Routes>
      <Route element={<AuthLayouts />}>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
      </Route>
    </Routes>
  );
}
