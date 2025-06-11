import { createBrowserRouter } from "react-router";
import App from "./App";
import Group from "./pages/Group/Group";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/group",
        element: <Group />,
      },
    ],
  },
]);

export default router;
