// src/products/[ProductId]/page.tsx
import React from 'react';

const ProductPage = ({ params }: { params: { ProductId: string } }) => {
  if (!params || !params.ProductId) {
    return <div>Loading...</div>;  // or return an error message
  }

  return (
    <div>
      <h1>Product ID: {params.ProductId}</h1>
      <p>Details about product</p>
    </div>
  );
};

export default ProductPage;
