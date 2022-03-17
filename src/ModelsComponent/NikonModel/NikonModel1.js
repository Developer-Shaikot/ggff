import React, { useState } from "react";
import GetValue from "../../SellComponent/SellCamera/GetValue";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

import imgOne from '../../images/Nikon/Nikon D3200.png'
import imgTwo from '../../images/Nikon/Nikon D3300.jpg'
import imgThree from '../../images/Nikon/Nikon D3400.png'
import imgFour from '../../images/Nikon/Nikon D3500.jpg'
import imgFive from '../../images/Nikon/Nikon D5100.jpg'
import imgSix from '../../images/Nikon/Nikon D5200.jpg'
import imgSeven from '../../images/Nikon/Nikon D5300.png'
import imgEight from '../../images/Nikon/Nikon D5500.png'
import imgNine from '../../images/Nikon/Nikon D5600.png'
import imgTen from '../../images/Nikon/Nikon D7000.png'
import imgEleven from '../../images/Nikon/Nikon D7100.png'
import imgTwelve from '../../images/Nikon/Nikon D7200.png'
import imgThirteen from '../../images/Nikon/Nikon D750.jpg'
import imgFourteen from '../../images/Nikon/Nikon D850.jpg'
import imgFifteen from '../../images/Nikon/Nikon Z50.jpg'
import imgSixteen from '../../images/Nikon/Nikon Z6.jpg'
import imgSeventeen from '../../images/Nikon/Nikon Z7 II.jpg'
import imgEightteen from '../../images/Nikon/Nikon Z7.jpg'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "react-bootstrap";


// import imgEightteen from "../../images/Canon/18-55 mm.jpg";
// import imgNineteen from "../../images/Canon/55-250 mm.jpg";
// import imgTwenty from "../../images/Canon/50mm STM jpg.jpg";
// import imgTwentyOne from "../../images/Canon/50mm.jpg";
// import imgTwentyTwo from "../../images/Canon/75-300 mm.jpg";
// import imgTwentyThree from "../../images/Canon/18-135 mm STM.jpg";
// import imgTwentyFour from "../../images/Canon/10-18 mm.jpg";

const NikonData = [
    {
        id: 1,
        img: imgOne,
        mName: "D3200",
        price: 10500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 2,
        img: imgTwo,
        mName: "D3300",
        price: 11500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 3,
        img: imgThree,
        mName: "D3400",
        price: 12500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 4,
        img: imgFour,
        mName: "D3500",
        price: 13500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 5,
        img: imgFive,
        mName: "D5100",
        price: 10500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 6,
        img: imgSix,
        mName: "D5200",
        price: 12500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 7,
        img: imgSeven,
        mName: "D5300",
        price: 14500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 8,
        img: imgEight,
        mName: "D5500",
        price: 15500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 9,
        img: imgNine,
        mName: "D5600",
        price: 16500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 10,
        img: imgTen,
        mName: "D7000",
        price: 17500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 11,
        img: imgEleven,
        mName: "D7100",
        price: 20500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 12,
        img: imgTwelve,
        mName: "D7200",
        price: 22500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 13,
        img: imgThirteen,
        mName: "D850",
        price: 74500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 14,
        img: imgFourteen,
        mName: "D750",
        price: 37500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 15,
        img: imgFifteen,
        mName: "Z6",
        price: 53500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 16,
        img: imgSixteen,
        mName: "Z50",
        price: 43500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 17,
        img: imgSeventeen,
        mName: "Z7",
        price: 60500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
    {
        id: 18,
        img: imgEightteen,
        mName: "Z7 II",
        price: 75500,
        note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
    },
];
const NikonModel1 = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    //   console.log("p", canonData);
    //   console.log("p", typeof id);
    const product = NikonData.find((pd) => pd.id === Number(id));
    // console.log("product", product);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    // console.log("id", NikonData);
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


export default NikonModel1;