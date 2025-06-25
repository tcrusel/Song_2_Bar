import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BarPage from "./pages/BarPage";
//import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/bar/:id" element={<BarPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
