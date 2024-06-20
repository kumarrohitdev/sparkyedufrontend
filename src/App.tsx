import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LoginForm from "./Pages/Login";
import ResponsiveAppBar from "./Components/Navbar";
import { IsAuthenticatedProvider } from "./context/IsAuthenticated";
import Profile from "./Pages/Profile";
import RegisterForm from "./Pages/Signup";
import Footer from "./Components/Footer";
import Refund from "./Pages/Refund";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";
import Adminpanel from "./Pages/Adminpanel";
import Blog from "./Pages/Blog";

export default function App() {
  return (
    <div>
      <IsAuthenticatedProvider>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/refund-policy" element={<Refund/>} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/About" element={<About />}/>
            <Route path="/admin" element={<Adminpanel />}/>
            <Route path="/Blog" element={<Blog />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </IsAuthenticatedProvider>
    </div>
  );
}
