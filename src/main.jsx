import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "../src/assets/css/app.css";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider, toast } from "./components/Toast/ToastProvider";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ToastProvider />
    <Provider store={store}>
      <RouterProvider router={router} />,
    </Provider>
  </QueryClientProvider>,
);
