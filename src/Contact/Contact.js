import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'
import Footer from '../Footer/Footer';

import { Button } from 'react-bootstrap';

import Navbar from '../Components/Navbar/Navbar';




const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  

  const onSubmit = data => {
    const getValueData = {
      number: data.number,
      name: data.name, 
      message: data.message
      
    }
  
    const url = `https://arcane-thicket-06182.herokuapp.com/getValues`
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getValueData)
    })
      .then(res => {
        if(res){
          alert('Thank You for contacting us, we will get you back soon!!')
        }
      })
      
  };

    return(
      <div>
        <Navbar/>
        <div className="row row-cols-1 row-cols-md-2 g-4 rounded-3 cnt shadow mt-5 mb-5">
          
        <div className="cbg g-4 rounded-3 ml-5 mt-5 mb-5">
            <h3 className="cntSide mt-4">Contact Information</h3>
            <br/>
            <p className="p">Fill up the form and our team will get back to you within 24 hours.</p>
            <Footer></Footer>

        </div>
        <div className=" ml-5 ">
          
          <h3 style={{
            color: "black",
            marginTop: "20px",
            fontFamily: "Montserrat",
            fontSize: "30px",
          }} className="pra ml-5 mr-5 mt-5"> Contact <span  style={{
            color: "orange",
            marginTop: "20px",
            fontFamily: "Montserrat",
            fontSize: "30px",
          }} >Gadgefy</span></h3>
        <form style={{marginLeft: '20%'}} id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div  className="form-group">
              <label className="pra">Name</label>
              <input  {...register("name", { required: true })} className="form-control" />
              {errors.name && <span className="error">Name is required</span>}
          </div>
          <div className="form-group">
              <label className="pra">Phone Number</label>
              <input  {...register("number", { required: true })} className="form-control" />
              {errors.email && <span className="error">Phone Number is required</span>}
          </div>
          <div className="form-group">
              <label className="pra">Message</label>
              <textarea  {...register("message", { required: true })} className="form-control"  rows="5" />
              {errors.message && <span className="error">Message is required</span>}
          </div>
          <Button  type="submit" variant="outline-warning" size="lg mt-3 mb-2" className="pra" > Send</Button>
        </form>
        
      </div>
      </div>
      <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">
                    @Gadgefy {new Date().getFullYear()} Copyright All Rights Reserved
                </footer>
      </div>
    );
  };

export default Contact;