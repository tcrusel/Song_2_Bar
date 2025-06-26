import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
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
    ],
  },
]);

export default router;
