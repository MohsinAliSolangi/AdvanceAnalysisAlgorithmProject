import React, { useState } from "react";
import Home from "./components/Home";
import AddProductForm from "./components/AddProductForm";
import { Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([
    {
      id: 101,
      name: "Smart TV",
      category: "Electronics",
      price: 499.99,
      stock: 120,
      rating: 4.5,
      salesVolume: 300,
      supplier: "Premium",
    },
    {
      id: 102,
      name: "Leather Jacket",
      category: "Apparel",
      price: 199.99,
      stock: 80,
      rating: 4.2,
      salesVolume: 150,
      supplier: "Retail",
    },
    {
      id: 103,
      name: "Leather Jacket",
      category: "Apparel",
      price: 199.99,
      stock: 80,
      rating: 4.2,
      salesVolume: 150,
      supplier: "Retail",
    },
    {
      id: 104,
      name: "Leather Jacket",
      category: "Apparel",
      price: 199.99,
      stock: 80,
      rating: 4.2,
      salesVolume: 150,
      supplier: "Retail",
    },
    {
      id: 105,
      name: "Leather Jacket",
      category: "Apparel",
      price: 199.99,
      stock: 80,
      rating: 4.2,
      salesVolume: 150,
      supplier: "Retail",
    },
    {
      id: 106,
      name: "Leather Jacket",
      category: "Apparel",
      price: 199.99,
      stock: 80,
      rating: 4.2,
      salesVolume: 150,
      supplier: "Retail",
    },
    {
      id: 107,
      name: "Smart TV",
      category: "Electronics",
      price: 499.99,
      stock: 120,
      rating: 4.5,
      salesVolume: 300,
      supplier: "Premium",
    },
    {
      id: 108,
      name: "Smart TV",
      category: "Electronics",
      price: 499.99,
      stock: 120,
      rating: 4.5,
      salesVolume: 300,
      supplier: "Premium",
    },
    {
      id: 109,
      name: "Smart TV",
      category: "Electronics",
      price: 499.99,
      stock: 120,
      rating: 4.5,
      salesVolume: 300,
      supplier: "Premium",
    },
    // Add more products here...
  ]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} setProducts={setProducts} />}
        />
        <Route
          path="/addProduct"
          element={
            <AddProductForm products={products} setProducts={setProducts} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
