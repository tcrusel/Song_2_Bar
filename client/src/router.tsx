import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import BarPage from "./pages/BarPage/BarPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "bar/:id",
        element: <BarPage />,
      },
    ],
  },
]);

export default router;
