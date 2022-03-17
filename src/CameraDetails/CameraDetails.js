import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import CamData from './CamData';
const CameraDetails = () => {

    const { id } = useParams();
    const [cam, setCam] = useState([])

    const [cart, setCart] = useState([])

    const addCart = (item) => {
        const newCart = [...cart,item]
        setCart(newCart);
        
    }
    console.log(cart);

    const removeFromCart = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
      };

    useEffect(() => {
        const url = `https://arcane-thicket-06182.herokuapp.com/addCamera/${id}`;
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data[0]))
            .then(data => setCam(data[0]))
            ;
    },[])

    return (
        <div>
            <Navbar></Navbar>
            <div className="row">

                <div className="container">
                    {
                        cam.length === 0 && <div className="pra container text-black">...Loading</div>
                    }

                    <CamData cam={cam} cart={cart} removeFromCart={removeFromCart} addCart={addCart} >

                    </CamData>

                </div>

            </div>
            {/* <Cart cart={cart}></Cart> */}
        </div>
    );
};

export default CameraDetails;