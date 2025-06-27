import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import EventDetail from "./pages/Event/EventDetail";

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
    ],
  },
]);

export default router;
