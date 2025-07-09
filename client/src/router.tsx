import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BarPage from "./pages/BarPage/BarPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MusicGroup from "./pages/MusicGroup/MusicGroup";
import Register from "./pages/Register/Register";
import EventDetails from "./pages/event-temp-rename/EventDetails";
import Events from "./pages/event-temp-rename/Events";

const router = createBrowserRouter([
  {
    path: "/",
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/events",
        element: <Events />,
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
        path: "/bars/:id",
        element: <BarPage />,
      },
    ],
  },
]);

export default router;
