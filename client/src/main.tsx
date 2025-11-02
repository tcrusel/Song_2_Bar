import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import "./reset.css";
import "./assets/_variables.css";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        theme="colored"
        position="top-right"
        limit={2}
        autoClose={3000}
      />
    </AuthProvider>,
  );
} else {
  console.error("L'élément #root est introuvable !");
}
