import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/Error/ErrorPage";
/**
 * Public Routes
 */
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ForgetPassword from "./pages/ForgetPassword";

/**
 * Protected Routes
 */
import DashboardRoute from "../src/module/dashboard/pages/routes";

const publicRoutes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
  {
    path: "forget-password",
    element: <ForgetPassword />,
  },
];

let protectedRoutes = [...DashboardRoute.children];

protectedRoutes = protectedRoutes.map((route) => {
  return {
    ...route,
    element: <>{route.element}</>,
  };
});

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        
        ...protectedRoutes,
      ],
    },
    ...publicRoutes,
  ]);

export default router;
