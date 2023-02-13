import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import { checkToken } from '../../utilities/users-service';

export default function Profile(props) {
    function handleLogOut() {
        usersService.logOut();
        props.setUser(null);
    }

    async function handleCheckToken() {
        const expDate = await checkToken();
        alert(expDate);
    }
    
    return (
        <main>
            <h1>Hello, {props.user.name}</h1>
            <br />
            <Link to="" onClick={handleLogOut}>LOG OUT</Link>
            <br />
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </main>
    )
}