import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import EventDetails from "./pages/EventDetails";
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
        element: <HomePage />,
      },
      {
        path: "/events/:id",
        element: <EventDetails />,
      },
    ],
  },
]);

export default router;
