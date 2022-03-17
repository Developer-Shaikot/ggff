import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

import Sidebar from '../Admin/Sidebar/Sidebar';

const AddService = () => {

  const [serviceImg, setServiceImg] = useState(null)
  // console.log(serviceImg);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    const cameraData = {
      name: data.name,
      price: data.price,
      description: data.description,
      imageURL: imageURL
    }
    const url = `https://arcane-thicket-06182.herokuapp.com/addCameras`

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cameraData)
    })
      // .then(res => console.log('server side responded', res))
  };

  const handleImageUpload = event => {
    // console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'c0ff542b5a259d5519c36fdec59edd85');
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        // console.log(error);
      });


  }


  return (
    <div className="row" >
      <div className="col-md-3"><Sidebar></Sidebar>

      </div>

      <div className="pra col-md-8">
        <form className="w-55 m-5" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-5">Add Cameras</h2>
          <label htmlFor="">Camera Name</label>
          <input className="form-control mt-1" {...register("name")} />

          {errors.message && <span className="error">Name is required</span>}
          <br />

          <label htmlFor="">Price</label>
          <input className="form-control mt-1"  {...register("price")} />

          {errors.message && <span className="error">Price is required</span>}
          <br />


          <label className="pra">Description</label>
          <textarea  {...register("description", { required: true })} className="form-control" name='description' rows="5" id="description" />

          {errors.message && <span className="error">Description is required</span>}
          <br />


          <input className="form-control mt-3" onChange={handleImageUpload} type="file" />

          {errors.message && <span className="error">File is required</span>}
          <br />



          <input className="btn-dark m-3" type="submit" />

          <p style={{ color: 'red' }}>{watch.error}</p>
          {watch.success && <p style={{ color: 'green' }}>User successfully</p>}

        </form>
      </div>
    </div>
  );
};

export default AddService;