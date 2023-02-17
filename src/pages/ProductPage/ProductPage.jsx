import React from 'react';


export default function Product(props) {
  console.log(props.products)
  
  let prod = props.products.map((product, index) => {
    return (
      <div key={index}>
        <h3>{product.title}</h3>
       
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