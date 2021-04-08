import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductCart from '../ProductCart/ProductCart';
import './Home.css'

const Home = () => {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('https://evening-atoll-25492.herokuapp.com/getProducts')
        .then(response=>response.json())
        .then(data=>{
            setProducts(data)
            setLoading(false)
        })
      },[])
    return (
        <section className="productsArea">
            <div className="container">
                <div className="row">
                    {
                        loading&&<Spinner className="spinner" animation="border" variant="success" />
                    }
                    {
                        products.map(product=><ProductCart product={product} key={product._id}></ProductCart>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;