import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
           <div className="notFoundText">
                <h1>Sorry! Page is not found</h1>
                <h1>Error 404!!</h1>
                <Link to="/home"><button className="backButton">Back To Home</button></Link>
           </div>
        </div>
    );
};

export default NotFound;