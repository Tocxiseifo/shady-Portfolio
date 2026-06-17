import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/aboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ClientsPage from "../pages/ClientsPage";

export default function AppRouter() {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/clients" element={<ClientsPage />} />
            </Routes>
        </>
    )
} 