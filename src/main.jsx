import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import '../src/assets/css/app.css';
import router from './routes';
import { Provider } from 'react-redux';
import store from './store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />,
  </Provider>,
)
