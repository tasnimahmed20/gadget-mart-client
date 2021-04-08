import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import OrderProduct from '../OrderProduct/OrderProduct';
import './Order.css'

const Order = () => {
    const [orderInfo,setOrderInfo]=useState([])
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    useEffect(()=>{
        fetch('https://evening-atoll-25492.herokuapp.com/orderProduct?email='+loggedInUser.email)
        .then(response=>response.json())
        .then(data=>setOrderInfo(data))
    })
    return (
        <section className="checkoutArea">
            <div className="container">
                <div className="row">
                    {
                        orderInfo.length>0?<div className="col-lg-12">
                        <h1>Orders OverView: </h1>
                        <table className="table tableShadow">
                            <thead>
                                <tr>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderInfo.map(product=><OrderProduct product={product} key={product._id}></OrderProduct>)
                                }
                            </tbody>
                        </table>
                        <div className="text-right">
                        <Link to='/order' className="btn btn-primary" style={{background: "#3f51b5"}}>Confirm Order</Link>
                        </div>
                    </div>:
                    <div className="col-lg-12">
                        <h1>Sorry! You don't have any Order Now</h1>                    
                    </div>
               
                    }
                </div>
            </div>
        </section>
    );
};

export default Order;