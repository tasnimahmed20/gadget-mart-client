import React from 'react';
import { Link } from 'react-router-dom';

const ProductCart = (props) => {
    const {name,price,image,_id}=props.product
    return (
        <div className="col-md-6 col-lg-4">
           <div className="card productCard">
                <img className="card-img-top" src={image} alt={name}/>
                <div>
                    <h5 className="card-title">{name}</h5>
                    <div className="mt-4">
                        <p className="card-text d-inline-block">Price: ${price}</p>
                        <Link to={`/checkout/${_id}`} className="btn btn-primary buyNow">Buy Now</Link>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default ProductCart;