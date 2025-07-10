import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import "./reset.css";
import "./assets/_variables.css";
import { UserProvider } from "./contexts/UserContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>,
  );
} else {
  console.error("L'élément #root est introuvable !");
}
