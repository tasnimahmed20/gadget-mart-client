import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThLarge,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import './Admin.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Admin = () => {
    const { register, handleSubmit } = useForm();
  const [imageURL,setImageURL]=useState(null)
  
  const onSubmit = data =>{
    const productData={
      name:data.name,
      price:data.price,
      weight:data.weight,
      image:imageURL
    }
    const url=`https://evening-atoll-25492.herokuapp.com/addProduct`
    fetch(url,{
      method:'POST',
      headers:{'content-Type': 'application/json'},
      body:JSON.stringify(productData)
    })
    .then(response =>response.json())
    .then(data=>console.log(data))
  };


  const handleImageUpload=(event)=>{
    const imgData=new FormData();
      imgData.set('key','78a8accb253aa4dd7493f669bee78df3');
      imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then( response=> {
          setImageURL(response.data.data.display_url);
        })
        .catch((error) =>{
          console.log(error);
        });
    }
    

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
                        <div className="formArea">
                            <h1>Add Product</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input  placeholder="Enter Product Name" type="text" className="form-control input_p" {...register("name")} required/>
                                <input  placeholder="Enter Product weight in gm" type="text" className="form-control input_p my-4" {...register("weight")} required/>
                                <input  placeholder="Enter Product price in $" type="number" className="input_p form-control my-4" {...register("price")} required/>
                                <input className="my-2" type="file" onChange={handleImageUpload} required/>
                                <br/>
                                <input className="btn btn_primary" type="submit" value="Save" />
                                <input className="btn btn_primary btn_danger" type="reset" value="Reset" />
                            </form>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Admin;