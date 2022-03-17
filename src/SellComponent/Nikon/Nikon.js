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


// import imgEightteen from '../../images/Canon/18-55 mm.jpg'
// import imgNineteen from '../../images/Canon/55-250 mm.jpg'
// import imgTwenty from '../../images/Canon/50mm STM jpg.jpg'
// import imgTwentyOne from '../../images/Canon/50mm.jpg'
// import imgTwentyTwo from '../../images/Canon/75-300 mm.jpg'
// import imgTwentyThree from '../../images/Canon/18-135 mm STM.jpg'
// import imgTwentyFour from '../../images/Canon/10-18 mm.jpg'

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
const Nikon = () => {
    // console.log(NikonData);
    return (
        <div>
            <p className="container">
                <strong
                    style={{
                        color: "orange",
                        marginTop: "20px",
                        fontFamily: "Montserrat",
                        fontSize: "30px",
                    }}
                >
                    Nikon <span style={{ color: "black" }}> Models</span>{" "}
                </strong>
            </p>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3 mt-2">
                    {NikonData.map((Nikon) => (
                        <Link className="Cn" to={`/modelnikon/${Nikon.id}`}>
                            <div className="buyCam shadow">
                                <div className="container">
                                <img
                                    style={{
                                        borderRadius: "5px",
                                        width: "65%",
                                        height: "60%", 
                                        marginLeft: "7px",
                                    }}
                                    src={Nikon.img}
                                    alt=""
                                />
                                <div class="card-body mt-2 mb-5">
                                    <h7 className="pra text-black">{Nikon.mName}</h7>
                                    <br />
                                </div>
                                </div>
                            </div>
                        </Link>
                    ))}




                    {/* <Link className="Cn" to="/EOS1300D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgTwo}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 1300D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS1500D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgThree}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 1500D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS3000D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgFour}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 3000D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS200D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgFive}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 200D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS200II">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgSix}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 200 II</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS700D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgSeven}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 700D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS600D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgEight}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 600D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS80D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgNine}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 80D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS77D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgTen}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 77D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS90D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgEleven}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 90D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOSM50MIRRORLESS">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgTwelve}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS M50 MIRRORLESS</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS6D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgThirteen}
                alt=""
              />
              <div clclassName="card">
                <h5 class="card-text">EOS 6D </h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS7D">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgFourteen}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 7D</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOSR5">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgFifteen}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS R5</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS5DIII">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgSixteen}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 5D III</h5>
                <br />
              </div>
            </div>
          </Link>
          <Link className="Cn" to="/EOS5DIV">
            <div className="card">
              <img
                style={{
                  borderRadius: "5px",
                  height: "110px",
                  marginLeft: "7px",
                }}
                src={imgSeventeen}
                alt=""
              />
              <div class="card-body">
                <h5 class="card-text">EOS 5D IV</h5>
                <br />
              </div>
            </div>
          </Link> */}
                    {/* <div className="p-2">

                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={imgEightteen} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    18-55 mm
                                </h5>
                                <br />
                            </div>

                        </div>

                        <div className="p-2">

                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={imgNineteen} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    55-250 mm
                                </h5>
                                <br />
                            </div>

                        </div>

                        <div className="p-2">

                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={imgTwenty} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    50mm STM
                                </h5>
                                <br />
                            </div>

                        </div>

                        <div className="p-2">

                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={imgTwentyOne} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    50mm
                                </h5>
                                <br />
                            </div>

                        </div>

                        <div className="p-2">

                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={imgTwentyTwo} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    75-300 mm
                                </h5>
                                <br />
                            </div>

                        </div>

                        <div className="p-2">

                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={imgTwentyThree} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    18-135 mm STM
                                </h5>
                                <br />
                            </div>

                        </div>

                        <div className="p-2">

                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={imgTwentyFour} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    10-18 mm
                                </h5>
                                <br />
                            </div>

                        </div> */}
                </div>
            </div>
        </div>
    );
};



export default Nikon;