import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({user}) {

  return (
    <main>
      { user ?
        <nav>
          <Link to="/products">Products</Link>
          &nbsp; | &nbsp;
          <Link to="/products/new">New Product</Link>
          &nbsp; | &nbsp;
          <Link to="/profile">Profile</Link>
        </nav>
      :
        <nav>
          <Link to="/products">Products</Link>
          &nbsp; | &nbsp;
          <Link to="/auth">Sign In</Link>
        </nav>
      }
    </main>
  );
}