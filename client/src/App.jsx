import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/medicines"
                element={<Medicines />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/cart"
                element={<Cart />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/contact"
                element={<Contact />}
            />

        </Routes>
    );
}

export default App;