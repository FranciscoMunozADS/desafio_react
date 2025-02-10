import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { PizzaProvider } from "./context/PizzaContext";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {

  const { token } = useContext(UserContext);

  return (
    <>
        <PizzaProvider>
          <Navbar />
          <Routes>
            {/* ruta publica */}
            <Route path="/" element={<Home />} />
            {/* ruta protegida */}
            <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login"/>} />
            {/* ruta login y register */}
            <Route path="/register" element={token ? <Navigate to="/"/> : <Register />} />
            <Route path="/login" element={token ? <Navigate to="/"/> : <Login />} />
            {/* otras rutas */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PizzaProvider>
    </>
  );
}

export default App;
