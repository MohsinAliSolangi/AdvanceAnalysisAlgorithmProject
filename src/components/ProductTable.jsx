// src/components/ProductTable.js
import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Rating</th>
          <th>Sales Volume</th>
          <th>Supplier</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.rating}</td>
            <td>{product.salesVolume}</td>
            <td>{product.supplier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
