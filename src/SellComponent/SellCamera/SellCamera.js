import axios from 'axios';
import { Button } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';




const SellCamera = () => {

    const [serviceImg, setServiceImg] = useState(null)
    console.log(serviceImg);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
      const sellCameraData = {
          name: data.name,
          price:data.price,
          imageURL: imageURL
      }
      const url = `https://arcane-thicket-06182.herokuapp.com/sellCameras`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sellCameraData)
        })
        .then(res => console.log ('server side responded',res))
    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'c0ff542b5a259d5519c36fdec59edd85');
        imageData.append('image',event.target.files[0])
    
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    
    
      }

    return (
        <div id="container" className="row" >
        <div className="col-md-3">
            
        </div>
        
         <div className="pra col-md-8"> 
         <form className="w-55 m-5"  onSubmit={handleSubmit(onSubmit)}>
         <h2 className="mb-5">Sell your cameras here by posting your content...</h2>
             <label  htmlFor="">Camera &Model Name</label>
             <input className="form-control mt-1" {...register("name")} />
             
             <label htmlFor="">Price</label>
             <input className="form-control mt-1"  {...register("price")} />
             
             <input className="form-control mt-3" onChange={handleImageUpload} type="file"  />

           
            
             <input className="btn-dark m-3" type="submit" />

              <br />
              <br />
             <Link to="/showCamera"><Button  variant="warning">See Post</Button>{' '} </Link>
         </form></div>
     </div>
    );
};

export default SellCamera;