import React, {useState} from 'react';
import M from 'materialize-css';
import { useNavigate, useLocation } from 'react-router-dom';
import * as productsAPI from '../../utilities/products-api'

export default function EditPage({ product, setProduct }) {
    console.log(product);
    const location = useLocation();
    let _id = location.state._id;
    console.log(_id)
    const [states, setStates] = useState({
        title: '',
        category: 'other',
        green: 'yes',
        description: ''
    })
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          const newProduct = await productsAPI.updateProduct(_id, states)
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
        setStates({
          ...states,
          [evt.target.name]: evt.target.value
        });
        console.log(states)
      };
    
      function materialize() {
        M.AutoInit();
      };
    
      materialize()
    
      function Redirect() {
        const navigate = useNavigate();
        navigate('/products');
      }
    
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <h6>Title</h6>
                <input name="title" onChange={handleChange} value={states.title} required />
                <h6>Category</h6>
                <select name="category" onChange={handleChange} value={states.category} >
                    <option value="other">Other</option>
                    <option value="home">Home</option>
                    <option value="garden">Garden</option>
                    <option value="childcare">Childcare</option>
                    <option value="petcare">Petcare</option>
                </select>
                <h6>Is It Green?</h6>
                <select name="green" onChange={handleChange} value={states.green}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <h6>Description</h6>
                <input type="text" name="description" value={states.description} onChange={handleChange} required />
                <button type="submit">SUBMIT CHANGES</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{states.error}</p>
          </div>
        )
}