import React from 'react';
import M from 'materialize-css';
import { useNavigate } from 'react-router-dom';
import * as productsAPI from '../../utilities/products-api'

export default function NewProductForm({ product, setProduct }) {

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newProduct = await productsAPI.addProduct(product)
      console.log(newProduct)
      // const formData = {...setProduct};
      // delete formData.error;
      // delete formData.confirm;
      // console.log(formData);
    } catch {
      setProduct({error: 'Failed - Try Again'});
    }
  };

  function handleChange(evt) {
    evt.preventDefault()
    setProduct({
      ...product,
      [evt.target.name]: evt.target.value,
      error: ''
    });
    console.log(product)
  };

  function componentDidMount() {
    M.AutoInit();
  };

  componentDidMount()

  function Redirect() {
    const navigate = useNavigate();
    navigate('/products');
  }

    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h6>Title</h6>
            <input name="title" onChange={handleChange} value={product.title} required />
            <h6>Category</h6>
            <select name="category" onChange={handleChange} value={product.category} >
                <option value="other">Other</option>
                <option value="home">Home</option>
                <option value="garden">Garden</option>
                <option value="childcare">Childcare</option>
                <option value="petcare">Petcare</option>
            </select>
            <h6>Is It Green?</h6>
            <select name="green" onChange={handleChange} value={product.green}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <h6>Description</h6>
            <input type="text" name="description" value={product.description} onChange={handleChange} required />
            <button type="submit">ADD PRODUCT</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{product.error}</p>
      </div>
    )
}