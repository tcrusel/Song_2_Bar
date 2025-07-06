import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EventDetails from "./pages/Event/EventDetails";
import Home from "./pages/Home/Home";
import MusicGroup from "./pages/MusicGroup/MusicGroup";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
