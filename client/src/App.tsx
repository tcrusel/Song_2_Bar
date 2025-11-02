import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
