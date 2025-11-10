import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Paripatra from "./Pages/Paripatra";
import Footer from "./Components/Footer";
import New from "./Pages/New";
import Beneficiaries from "./Pages/Beneficiaries";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import Gallery from './Pages/Gallery';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/paripatra" element={<Paripatra />} />
        <Route path="/News" element={<New />} />
        <Route path="/Beneficiaries" element={<Beneficiaries />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Gallery" element={<Gallery/>} />




      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
