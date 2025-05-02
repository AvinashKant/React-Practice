import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/Error/ErrorPage";
/**
 * Public Routes
 */
import Login from "./pages/Login";
import TrafficLight from "./pages/TrafficLight";
import NxN from "./pages/NxN";
import DynamicCounterPage from "./pages/DynamicCounterPage";
import ForgetPassword from "./pages/ForgetPassword";
import Learn1 from "./pages/Learn1";
import Otp from "./pages/Otp";

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
    path: "learn1",
    element: <Learn1 />,
  },
];

let protectedRoutes = [
  ...DashboardRoute.children,
  {
    path: "dynamic-counter",
    element: <DynamicCounterPage />,
  },
  {
    path: "forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "traffic-light",
    element: <TrafficLight />,
  },
  {
    path: "nxn",
    element: <NxN />,
  },
  {
    path: "otp-box",
    element: <Otp />,
  },
];

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
    children: [...protectedRoutes],
  },
  ...publicRoutes,
]);

export default router;
