import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import EventDetail from "./pages/Event/EventDetail";
import MusicGroup from "./pages/MusicGroup/MusicGroup";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "events/:id",
        element: <EventDetail />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/groups/:id",
        element: <MusicGroup />,
        children: [
          {
            path: "events/:eventId",
            element: <EventDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
