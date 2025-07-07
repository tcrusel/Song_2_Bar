import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import EventDetail from "./pages/Event/EventDetails";
import MusicGroup from "./pages/MusicGroup/MusicGroup";
import Register from "./pages/Register";

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
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
