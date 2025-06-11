import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/HomePage";

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
