import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Home from '../src/Components/Home';
import Contact from '../src/Components/Contact';
import AboutUs from '../src/Components/About';
import Services from '../src/Components/Services';
import LeadCaptureForm from '../src/Components/LeadCaptureForm';
import ClientLandingPage from './Components/ClientLandingPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/client" element={<ClientLandingPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/lead-capture" element={<LeadCaptureForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;