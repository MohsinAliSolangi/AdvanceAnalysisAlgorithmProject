import React from 'react';

const Product = ({ product }) => {
  return (
    <tr>
      <td>{product?.productID}</td>
      <td>{product?.productName}</td>
      <td>{product?.category}</td>
      <td>{product?.price}</td>
      <td>{product?.stock}</td>
      <td>{product?.discount}</td>
      <td>{product?.rating}</td>
      <td>{product?.reviews}</td>
      <td>{product?.salesVolume}</td>
      <td>{product?.returnRate}</td>
      <td>{product?.supplierID}</td>
      <td>{product?.shippingTime}</td>
      <td>{product?.isPremiumSupplier ? "Yes" : "No"}</td>
      <td>{product?.customerSegment}</td>
      <td>{product?.purchaseFrequency}</td>
      <td>{product?.profitMargin}</td>
      <td>{product?.lastRestockedDate}</td>
    </tr>
  );
};

export default Product;
