// import React from 'react'
// import Header from './Components/Header'
// import Home from './Components/Home'
// import Footer from './Components/Footer'
// import Contact from './Components/Contact'
// function App() {
//   return (
//     <>
//     <Header />
//     <Home />
//     <Footer />
//     <Contact />
//     </>
//   )
// }

// export default App
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Home from '../src/Components/Home';
import Contact from '../src/Components/Contact';
import AboutUs from '../src/Components/About';
import Services from '../src/Components/Services';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;