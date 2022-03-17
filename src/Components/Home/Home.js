import React from 'react';
import './Home.css'
import BuyingSection from '../BuyingSection/BuyingSection';
import About from '../../About/About';
import GadgefyWork from '../GadegefyWorks/GadgefyWork';
import WhyUs from '../WhyUs/WhyUs';
import img from '../../GadgefyDone/Illustration/Hero illustration.png'
import Testimonial from '../Testimonial/Testimonial';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div >
            <Navbar/>
            <div className="back">
                <div className="container">
                    <main className="row row-cols-2 row-cols-md-4">
            
                        <div >
                            <img className="hero" src={img}alt="" />
                        </div>

                    </main>
                    <div className="About">
                    <About />
                </div>
                </div>
                
                <div className="GadgefyWork mt-5">
                    <h6 className="HowWorks"><b>How Gad<span className="gefy">gefy</span> Works ?</b> </h6  >
                    <GadgefyWork />

                </div>
                {/* <div className="BuyingSection mt-5">
                    <h6 className="RecentNews"><b>Recent News</b> </h6  >
                    <BuyingSection />
                </div> */}
                <div className="Why">
                    <WhyUs />
                </div>
                {/* <div className="Testimonial">
                    <h6 className="What"><b>What Our Customer Says</b> </h6  >
                    <Testimonial />
                </div> */}
                <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@Gadgefy {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
             <br />
            </div>
            
        </div>

    );
};

export default Home;