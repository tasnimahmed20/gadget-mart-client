import React from 'react';

const CheckoutProduct = (props) => {
    const {name,weight,price}=props.product

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{weight}</td>
                <td>1</td>
                <td>${price}</td>
            </tr>
        </>
    );
};

export default CheckoutProduct;