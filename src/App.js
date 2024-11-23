import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Redirect page path
import Header from './Components/Header';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';

// Dummy Components for the Other Routes
// const Home = () => <div><h1>Home Page</h1></div>;
const Engineer = () => <div><h1>Engineer Page</h1></div>;
const Services = () => <div><h1>Services Page</h1></div>;
const Products = () => <div><h1>Products Page</h1></div>;

const App = () => {


  return (
    <Router>
    <div className="App">
        <Header />

        {/* Define Routes for your Pages */}
        {/* Main Content */}
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/engineer" element={<Engineer />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </main>
      

      {/* Footer */}
      <Footer/>

    </div>
  </Router>
  );
};

export default App;
