import React from 'react';
import NewProductForm from '../../components/NewProductForm/NewProductForm'

export default function NewProductPage({ product, setProduct }) {
  return (
    <>
      <h1>New Product Page</h1>
      <NewProductForm product={product} setProduct={setProduct}/>
    </>
  );
}