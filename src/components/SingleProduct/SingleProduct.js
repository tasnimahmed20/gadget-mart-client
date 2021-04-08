import axios from 'axios';
import React from 'react';
import './SingleProduct.css';

const handleDeleteProduct=(id)=>{
    console.log(id)
     axios.delete('https://evening-atoll-25492.herokuapp.com/delete/'+id)
     .then(response=>{
         console.log(response)
     })
     window.location.reload(true);
}

const SingleProduct = (props) => {
    const {name,weight,price,image,_id}=props.product
    return (
        <>
            <tr>
                <td><img className="tableProductImg" src={image} alt={name}/></td>
                <td>{name}</td>
                <td>{weight}</td>
                <td>${price}</td>
                <td><button onClick={()=>handleDeleteProduct(_id)} className="btn btn-primary" style={{background: "#3f51b5"}}>Delete</button></td>
            </tr>
        </>
    );
};

export default SingleProduct;