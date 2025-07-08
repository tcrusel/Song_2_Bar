import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import MusicGroup from "./pages/MusicGroup/MusicGroup";
import EventDetails from "./pages/event/EventDetails.tsx";
import Events from "./pages/event/Events.tsx";
import Register from "./pages/Register";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/events/:id",
        element: <EventDetails />,
      },
      {
        path: "/groups/:id",
        element: <MusicGroup />,
      },
    ],
  },
]);

export default router;
