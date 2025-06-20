import { createBrowserRouter } from "react-router-dom";
import EventDetail from "./pages/Event/EventDetail";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "events/:id",
        element: <EventDetail />,
      },
    ],
  },
]);

export default router;
