import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Checkout.css'

const Checkout = () => {

   const {productId}=useParams();
   const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [singleProduct,setSingleProduct]=useState([])
    useEffect(()=>{
        fetch(`https://evening-atoll-25492.herokuapp.com/singleProduct/${productId}`)
        .then(response=>response.json())
        .then(data=>setSingleProduct(data))
    },[])

    const handleOrder=()=>{
        const date=new Date()
        const orderDate=date.toLocaleString()
        const orderInfo={...loggedInUser,...singleProduct[0],orderDate}
        delete orderInfo._id;
        fetch('https://evening-atoll-25492.herokuapp.com/newOrder',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(orderInfo)
        })
        .then(response=>response.json())
        .then(data=>console.log(data))      

    }
    
    return (
        <section className="checkoutArea">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>CheckOut Product</h1>
                        <table className="table tableShadow">
                            <thead>
                                <tr>
                                    <th scope="col">Description</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    singleProduct.map(product=><CheckoutProduct product={product} key={product._id}></CheckoutProduct>)
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3">Total</td>
                                    {
                                        singleProduct.map(product=>
                                            <td key={product._id}>${product.price}</td>
                                        )
                                    }
                                </tr>
                            </tfoot>
                        </table>
                        <div className="text-right">
                            <Link to='/order' className="btn btn-primary" style={{background: "#3f51b5"}} onClick={handleOrder}>Check Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;