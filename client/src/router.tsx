import { createBrowserRouter } from "react-router";
import App from "./App";
import MusicGroup from "./pages/MusicGroup/MusicGroup";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/groups/:id",
        element: <MusicGroup />,
      },
    ],
  },
]);

export default router;
