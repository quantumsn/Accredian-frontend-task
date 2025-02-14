import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { Refer, Programs, Register, Login, Profile, ErrorPage } from "./pages";
import { Loader } from "./Components";
import ProtectedRoutes from "./Context/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=""
        element={
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <Refer />
            </Suspense>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/programs"
        element={
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <Programs />
            </Suspense>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
