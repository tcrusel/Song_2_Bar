import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BarPage from "./pages/BarPage/BarPage";
import EventDetails from "./pages/Event/EventDetails";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import MusicGroup from "./pages/MusicGroup/MusicGroup";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile/UserProfile";
import Events from "./pages/event/Events";

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
        path: "/events",
        element: <Events />,
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
      {
        path: "/bar/:id",
        element: <BarPage />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
