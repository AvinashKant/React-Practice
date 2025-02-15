import Dashboard from "./dashboard";
export default {
  path: "/",
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
  ],
};
