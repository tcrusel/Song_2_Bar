import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import MusicGroup from "./pages/MusicGroup/MusicGroup";
import Register from "./pages/Register";
import EventDetails from "./pages/event/EventDetails.tsx";
import Events from "./pages/event/Events.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/events",
        element: <Events />,
      },
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
        element: <EventDetails />,
      },
      {
        path: "/groups/:id",
        element: <MusicGroup />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
