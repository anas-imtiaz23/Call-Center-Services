import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Home from '../src/Components/Home';
import Contact from '../src/Components/Contact';
import AboutUs from '../src/Components/About';
import Services from '../src/Components/Services';
import LeadCaptureForm from '../src/Components/LeadCaptureForm';
import ClientLandingPage from './Components/ClientLandingPage';
import Landingpage from './Components/Landingpage';

// Layout wrapper component that conditionally shows Header and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  // Routes where you DON'T want Header and Footer
  const noHeaderFooterRoutes = ['/', '/client']; // Add more if needed
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);
  
  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Header />}
      <main className={!hideHeaderFooter ? "flex-grow" : ""}>
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/client" element={<ClientLandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/lead-capture" element={<LeadCaptureForm />} />
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;