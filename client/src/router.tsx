import { createBrowserRouter } from "react-router";
import Events from "./pages/event/Events";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);

export default router;
