import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
