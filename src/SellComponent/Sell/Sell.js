import React from 'react';
import GadgefyWork from '../../Components/GadegefyWorks/GadgefyWork';
import Navbar from '../../Components/Navbar/Navbar';
import img from '../../GadgefyDone/Illustration/Illustration.png'
import { useForm } from "react-hook-form";
import './Sell.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import WhyUs from '../../Components/WhyUs/WhyUs';
import ChooseBrand from '../ChooseBrand/ChooseBrand';
import TopSelling from '../TopSelling/TopSelling';
import SellingModels from '../SellingModels/SellingModels';
import SearchIcon from '@mui/icons-material/Search';



const Sell = () => {

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <div >
            <Navbar />
            <div className="sellBack">
                <div className="container">
                    <main className="row row-cols-5 row-cols-md-10">
                        <h1 class="sellTitle" ><b>Sell your Camera for <br /> <span>Instant Payment</span> </b> </h1>
                        <div className="textbox">
                            <p class="alignleft"><FontAwesomeIcon className="rightIcn" icon={faCheckCircle} />Maximum Value</p>
                            <p class="alignleft"><FontAwesomeIcon className="rightIcn" icon={faCheckCircle} />Safe and Hassle-free</p>
                            <p class="alignleft"><FontAwesomeIcon className="rightIcn" icon={faCheckCircle} />Free Doorstep Pickup</p>
                        </div>

                       
                        
                        <ChooseBrand />
                    </main>

                </div>
            </div>
            <div className="GadgefyWork mt-5">
                <h6 className="HowWorks"><b>How Gad<span className="gefy">gefy</span> Works ?</b> </h6  >
                <GadgefyWork />

            </div>
            <div className="top mt-5">
                <h6 className="topSelling"><b>Top Selling Brands</b> </h6  >
                <TopSelling />
            </div>
            <div className="Why">
                <WhyUs />
            </div>
            {/* <div className="top mt-5">
                <h6 className="topSelling"><b>Top Selling Models</b> </h6>
                    <SellingModels/>
            </div> */}
             <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@Gadgefy {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
             <br />
        </div>
    );
};

export default Sell;