import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import CameraData from '../BuyCamera/CameraData';
const BuyCamera = () => {

    const [cameras, setCameras] = useState([])
    

    useEffect(() => {
        fetch('https://arcane-thicket-06182.herokuapp.com/addCameras')
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <br />
            <p className="container">
                <strong style={{ color: 'orange', marginTop: '20px', fontFamily: 'Montserrat', fontSize: '30px' }}>Buy Your <span style={{ color: 'black'}}> Camera</span>  </strong>
            </p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3">
                    {
                        cameras.length === 0 && <div className="pra container text-black">...Loading</div>
                    }

                    {
                        cameras.map(camera => <CameraData

                            camera={camera} >
                                
                        </CameraData>)
                    }


                </div>
            </div>
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@Gadgefy {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
             <br />
        </div>
    );
};

export default BuyCamera;