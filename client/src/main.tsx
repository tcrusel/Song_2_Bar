import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App";
import Group from "./pages/Group/Group";
import "./reset.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/group",
        element: <Group />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(<RouterProvider router={router} />);
