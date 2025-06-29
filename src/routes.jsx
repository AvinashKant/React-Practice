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
import MouseHoverPointer from "./pages/MouseHoverPointer";
import UserList from "./pages/UserList";
import ChipsInputPage from "./pages/ChipsInputPage";
import Toast from "./pages/Toast";
import MousePosition from "./pages/MousePosition";
import EventSource from "./pages/EventSource";
import ToDoUsereducer from "./pages/ToDoUsereducer";
import ModelCss from "./pages/ModelCss";
import SidebarToggle from "./pages/SidebarToggle";
import ProgressBar from "./pages/ProgressBar";

/**
 * Protected Routes
 */
import DashboardRoute from "../src/module/dashboard/pages/routes";
import ToDo from "./pages/Todo";
import { elements } from "chart.js";

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
  {
    path: "to-do",
    element: <ToDo />,
  },
  {
    path: "mouse-hover-pointer",
    element: <MouseHoverPointer />,
  },
  {
    path: "user-list",
    element: <UserList />,
  },
  {
    path: "chips-input",
    element: <ChipsInputPage />,
  },
  {
    path: "toast",
    element: <Toast />,
  },
  {
    path: "mouse-position",
    element: <MousePosition />,
  },
  {
    path: "event-source",
    element: <EventSource />,
  },
  {
    path: "to-do-usereducer",
    element: <ToDoUsereducer />,
  },
  {
    path:"modelCss",
    element:<ModelCss/>
  },
  {
    path:"sidebar-toggle",
    element:<SidebarToggle/>
  },
  {
    path:"progress-bar",
    element:<ProgressBar/>
  }
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
