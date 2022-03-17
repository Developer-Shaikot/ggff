import React, { useState } from "react";


import imgOne from '../images/Sony/Sony A III.jpg'
import imgTwo from '../images/Sony/Sony A58.jpg'
import imgThree from '../images/Sony/Sony A6100.jpg'
import imgFour from '../images/Sony/Sony A6300.jpg'
import imgFive from '../images/Sony/Sony A6400.jpg'
import imgSix from '../images/Sony/Sony A68.jpg'
import imgSeven from '../images/Sony/Sony A7 II.jpg'
import imgEight from '../images/Sony/SonyA7.jpeg'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import GetValue from "../SellComponent/SellCamera/GetValue";

// import imgEightteen from '../../images/Canon/18-55 mm.jpg'
// import imgNineteen from '../../images/Canon/55-250 mm.jpg'
// import imgTwenty from '../../images/Canon/50mm STM jpg.jpg'
// import imgTwentyOne from '../../images/Canon/50mm.jpg'
// import imgTwentyTwo from '../../images/Canon/75-300 mm.jpg'
// import imgTwentyThree from '../../images/Canon/18-135 mm STM.jpg'
// import imgTwentyFour from '../../images/Canon/10-18 mm.jpg'

const sonyData = [
    {
      id: 1,
      img: imgOne,
      mName: "A58",
      price: 12500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
      id: 2,
      img: imgTwo,
      mName: "A68",
      price: 13500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
      id: 3,
      img: imgThree,
      mName: "A6100",
      price: 21500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
      id: 4,
      img: imgFour,
      mName: "A6300",
      price: 23500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
      id: 5,
      img: imgFive,
      mName: "A6400",
      price: 32500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
      id: 6,
      img: imgSix,
      mName: "A7",
      price: 27500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
      id: 7,
      img: imgSeven,
      mName: "A7 II",
      price: 30500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
      id: 8,
      img: imgEight,
      mName: "A III",
      price: 64500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  
    },
  ];
const SonyModel = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    //   console.log("p", canonData);
    //   console.log("p", typeof id);
    const product = sonyData.find((pd) => pd.id === Number(id));
    // console.log("product", product);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    // console.log("id", sonyData);
    return (
        <div>
            <Navbar></Navbar>
            <br />

            <p className="container">
                <strong
                    style={{
                        color: "orange",
                        marginTop: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "30px",
                    }}
                >
                    Sell Your <span style={{ color: "black" }}> Camera</span>{" "}
                </strong>
            </p>
            <div
                style={{ width: "70%", marginLeft: "15%" }}
                className="cart-item shadow text-center"
            >
                <div className="row row-cols-1 row-cols-md-3 g-4 rounded-1container">

                    <div>
                        <img
                            style={{ borderRadius: "5px", width: "70%", margin: "10%" }}
                            src={product.img}
                            alt=""
                        />
                    </div>

                    <div class="card-body">
                        <p>
                            Sell your,
                            <h3 style={{ color: "green" }}>{product.mName}</h3>
                        </p>
                        <br />
                        <p>
                            You can get Upto:
                            <h5 style={{ color: "green" }}>₹ {product.price}/-</h5>
                        </p>
                        <br />
                        <Button onClick={openModal} variant="warning">
                            Get Exact Value
                        </Button>{" "}
                        <GetValue
                            modalIsOpen={modalIsOpen}
                            mName={product.mName}
                            price={product.price}
                            closeModal={closeModal}
                        ></GetValue>
                        <br />
                        <p>
                        * Note: It's an estimated price for a Basic Single Lens, The Actual Price may vary depending on Condition, Accessories, For Immediate Price Please Call Us.
                        </p>
                    </div>
                </div>
            </div>
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">
                @Gadgefy {new Date().getFullYear()} Copyright All Rights Reserved
            </footer>
            <br />
        </div>
    );
};


export default SonyModel;