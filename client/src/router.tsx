import { createBrowserRouter } from "react-router";
import App from "./App";
import BarPage from "./pages/BarPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bar/:id",
    element: <BarPage />,
  },
]);

export default router;
