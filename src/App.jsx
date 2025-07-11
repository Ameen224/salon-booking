import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SalonDetails from "./pages/SalonDetails";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/salon/:id" element={<SalonDetails />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
