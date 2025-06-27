import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import "./reset.css";
import "./assets/_variables.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error("L'élément #root est introuvable !");
}
