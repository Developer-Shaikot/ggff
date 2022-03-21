import React from 'react';
import './CamData.css';
import TopSelling from '../SellComponent/TopSelling/TopSelling';
import SellingModels from '../SellComponent/SellingModels/SellingModels';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import WhyUs from '../Components/WhyUs/WhyUs';

const CamData = ({cam,cart,addCart,removeFromCart}) => {

    const total = cart.reduce((total, item) => total + parseFloat(item.price), 0);
    let tax = total/10;

    const { name, imageURL,description, price } = cam
    console.log(price)
    return (
        <div>
            <div className="cart-item row row-cols-1 row-cols-md-2 g-4 rounded-3 CamDta shadow" >
                <div className="container mt-3">
                <img style={{ width: '200px', margin: "5%" }} src={imageURL} alt="" />
                    <h1 className="pra mt-2">{name}</h1>
                    <br />
                    <p className="pra mt-2">{description}</p>
                    <div className="input-group number-spinner">
                        <button onClick={()=>removeFromCart(cam)} className="btn btn-default"><RemoveIcon /></button>
                        <input id="case-count" type="text" className="form-control text-center" value={cart.length}/>

                        <button onClick={()=>addCart(cam)} className="btn btn-default"><AddIcon /></button>

                    </div>
                    <p className="pra">Price:₹ {total}</p>

                </div>
                <div className="cart-item">
                    <div className="row">
                        <h2 className="mb-5">Calculation</h2>
                        <div className="col-md-12">
                            {/* <h5 >Subtotal: ₹ {total} <span style={{ marginLeft: '10px', padding: '5px' }} id="total-price"></span></h5> */}
                            {/* <h5>Tax: ₹ {tax} <span style={{ marginLeft: '10px', padding: '5px' }} id="tax-amount"></span></h5> */}
                            <h5>Total: ₹ {total} <span style={{ marginLeft: '10px', padding: '5px' }} id="grand-total"></span></h5>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-12 p-4 pb-4 mb-5">
                <Link to={`/contact`}>
                <button type="button" className="btn btn-success check-out">Check Out</button>
                </Link>
                </div>

            </div>

            <div className="top mt-5">
                <h6 className="topSelling"><b>Top Selling Brands</b> </h6  >
                <TopSelling />
            </div>
            
                <div className="Why mt-5">
                    <WhyUs />
                </div>
                <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@My Rate {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
             <br />
        </div>
    );
};

export default CamData;