import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EventDetail from "./pages/Event/EventDetail";

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
