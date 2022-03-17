import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const adminEmail = {
            email: data.email



        }
        const url = `https://arcane-thicket-06182.herokuapp.com/addAdmin`
        // console.log(adminEmail)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminEmail)
        })
        .then(res => console.log ('server side responded',res))
    };

    return (


        <div className="row">
            <Navbar/>
            <div className="col-md-3"><Sidebar></Sidebar>  </div>
            <div className="pra col-md-8">
                <form className="w-55 m-5" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Add Email</label>
                    <input className="form-control mt-2 " placeholder=" Enter Email Here" {...register("email")} />
                    <br />
                    <input className="btn-dark" type="submit" />
                </form></div>
        </div>


    );
};

export default AddAdmin;