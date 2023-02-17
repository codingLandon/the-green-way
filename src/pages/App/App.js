import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import * as productsAPI from '../../utilities/products-api'
import AuthPage from '../AuthPage/AuthPage';
import NewProductPage from '../NewProductPage/NewProductPage';
import ProductPage from '../ProductPage/ProductPage';
import Profile from '../Profile/Profile'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [product, setProduct] = useState({
    title: '',
    category: 'other',
    green: 'yes',
    description: '',
    image: '',
    user: ''
  })
  const [products, setProducts] = useState({})

  useEffect(function() {
    async function getProducts() {
      const productstmp = await productsAPI.getAll();
      setProducts(productstmp);
    }
    getProducts();
  }, []);

console.log(products)

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/products" element={<ProductPage products={ products } setProduct={ setProduct }/>} />
            <Route path="/products/new" element={<NewProductPage product={ product } setProduct={ setProduct }/>} />
            <Route path="/profile" element={<Profile user={ user }/>} />
          </Routes>
        </>
        :
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/products" element={<ProductPage />} />
            <Route path="/auth" element={<AuthPage user={user} setUser={setUser}/>} />
          </Routes>
        </>
      }
    </main>
  );
}
