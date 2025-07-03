import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Layout Components
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";

// Routes
import ClientRoutes from "./routes/ClientRoutes.jsx";
// import AdminRoutes from "./routes/AdminRoutes.jsx";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <Routes>
            {/* User-facing pages */}
            <Route path="/*" element={<ClientRoutes />} />

            {/* Admin dashboard pages */}
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;