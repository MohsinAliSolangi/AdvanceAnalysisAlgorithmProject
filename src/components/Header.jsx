import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onDeleteProduct, onSort }) => {
    let nevigate = useNavigate();

    const handleRegister = ()=>{
        nevigate("/addProduct");
    }

  return (
    <header className="header">
      <h1>E-Commerce Product Management</h1>
      <div className="header-actions">
        <button onClick={()=>handleRegister()}>Add Product</button>
        <button onClick={onDeleteProduct}>Delete Product</button>
        <button onClick={onSort}>Sort by Price</button>
      </div>
    </header>
  );
};

export default Header;
