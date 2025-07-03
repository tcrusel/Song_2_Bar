import { createBrowserRouter } from "react-router";
import App from "./App";
import EventDetail from "./pages/Event/EventDetail";
import Home from "./pages/Home/Home";
import MusicGroup from "./pages/MusicGroup/MusicGroup";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/groups/:id",
        element: <MusicGroup />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events/:id",
        element: <EventDetail />,
      },
    ],
  },
]);

export default router;
