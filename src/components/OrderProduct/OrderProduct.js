import React from 'react';

const OrderProduct = (props) => {
    const {name,weight,price,orderDate}=props.product
    return (
        <>
            <tr>
                <td>{orderDate}</td>
                <td>{name}</td>
                <td>{weight}</td>
                <td>1</td>
                <td>${price}</td>
            </tr>
        </>
    );
};

export default OrderProduct;