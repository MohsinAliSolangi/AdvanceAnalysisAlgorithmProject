import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductForm = ({ products, setProducts }) => {

  let nevigate = useNavigate();
  
  const [productForm, setProductForm] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    stock: "",
    rating: "",
    salesVolume: "",
    supplier: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        ...newProduct,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productForm?.id && productForm?.name) {
      handleAddProduct(productForm);
      nevigate("/");
      setProductForm({
        id: "",
        name: "",
        category: "",
        price: "",
        stock: "",
        rating: "",
        salesVolume: "",
        supplier: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <input
        type="text"
        name="id"
        value={productForm?.id}
        onChange={handleChange}
        placeholder="Product ID"
        required
      />
      <input
        type="text"
        name="name"
        value={productForm?.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        name="category"
        value={productForm?.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="number"
        name="price"
        value={productForm?.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="number"
        name="stock"
        value={productForm.stock}
        onChange={handleChange}
        placeholder="Stock"
      />
      <input
        type="number"
        name="rating"
        value={productForm?.rating}
        onChange={handleChange}
        placeholder="Rating"
        step="0.1"
      />
      <input
        type="number"
        name="salesVolume"
        value={productForm.salesVolume}
        onChange={handleChange}
        placeholder="Sales Volume"
      />
      <input
        type="text"
        name="supplier"
        value={productForm?.supplier}
        onChange={handleChange}
        placeholder="Supplier"
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
