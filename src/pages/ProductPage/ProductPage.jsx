import React from 'react';
import {deleteProduct, updateProduct} from '../../utilities/products-api'
import {useNavigate} from 'react-router-dom';


export default function Product(props) {
  console.log(props.products)

  let navigate=useNavigate();
  
  let prod = props.products.map((product, index) => {
    console.log(product._id)
    return (
      <div key={index} className="card">
        <h3>{product.title}</h3>
        <h5>CATEGORY: {product.category}</h5>
        <h5>GREEN: {product.green}</h5>
        <h6>{product.description}</h6>
        <div className="card-action">
        <button onClick={() => {
            navigate("/products/edit", {state: {_id: product._id}})
          }}>EDIT</button>
          <button onClick={() => {
            return deleteProduct(product._id)
          }}>DELETE</button>
        </div>
      </div>
    );
  })

    return (
      <>
          <div className="container">
            <h2>Product Page</h2>
            <h3>{prod}</h3>
          </div>     
      </>
    );
}