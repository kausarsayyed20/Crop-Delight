import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Register from './Components/Register/RegisterPage';
// import Login from './Components/Login/LoginPage';
// import Home from './Components/Home/HomePage';
import ProductForm from './Components/Product/ProductForm'; // Import the ProductForm component

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Routes> */}
          {/* <Route path="/" element={<Home />} /> Set Home as the default route */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/add-product" element={<ProductForm />} /> Add the route for ProductForm */}
        {/* </Routes> */}
        <ProductForm />
      </div>
    </Router>
  );
}

export default App;
