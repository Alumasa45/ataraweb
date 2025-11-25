import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Classes from './components/Classes';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BookNow from './components/BookNow';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-now" element={<BookNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;