import React, { useState } from "react";
import Header from "./Header";
import ProductTable from "./ProductTable";

const Home = ({ products, setProducts }) => {
  const handleDeleteProduct = () => {
    // Implement delete product functionality
  };

  const handleSort = () => {
    // Implement sorting functionality
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  return (
    <div>
      <Header onDeleteProduct={handleDeleteProduct} onSort={handleSort} />
      <ProductTable products={products} />
    </div>
  );
};

export default Home;
