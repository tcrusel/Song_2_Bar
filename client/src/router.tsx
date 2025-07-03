import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";

import BarPage from "./pages/BarPage/BarPage";
import EventDetail from "./pages/Event/EventDetail";
import MusicGroup from "./pages/MusicGroup/MusicGroup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events/:id",
        element: <EventDetail />,
      },
      {
        path: "bar/:id",
        element: <BarPage />,
      },
      {
        path: "/groups/:id",
        element: <MusicGroup />,
      },
    ],
  },
]);

export default router;
