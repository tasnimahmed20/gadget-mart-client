import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThLarge,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import './EditProduct.css';
import SingleProduct from '../SingleProduct/SingleProduct';

const EditProduct = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://evening-atoll-25492.herokuapp.com/getProducts')
        .then(response=>response.json())
        .then(data=>setProducts(data))
      },[])
    return (
        <div className="adminContent">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 links">
                        <div className="adminLinks">
                            <h4><FontAwesomeIcon icon={faThLarge} /> Manage Products</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faPlus} /><Link to="/admin">Add Product</Link></li>
                                    <li><FontAwesomeIcon icon={faPencilAlt} /><Link to="/editProduct">Edit Product</Link></li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="productEditArea">
                            <h1>Edit Product</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Weight</th>
                                        <th scope="col">Product Price</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(product=><SingleProduct product={product} key={product._id}></SingleProduct>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default EditProduct;