import Dashboard from "./Dashboard";
export default {
  path: "/",
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
  ],
};
