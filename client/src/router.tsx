import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import MusicGroup from "./pages/MusicGroup/MusicGroup";
import Events from "./pages/event/Events";

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
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
