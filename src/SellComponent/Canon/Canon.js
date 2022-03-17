import React from "react";
import { Link } from "react-router-dom";
import "./Canon.css";
import imgOne from "../../images/Canon/Canon EOS 1200D.jpg";
import imgTwo from "../../images/Canon/Canon EOS 1300D.jpg";
import imgThree from "../../images/Canon/Canon EOS 1500D.png";
import imgFour from "../../images/Canon/Canon EOS 3000D.png";
import imgFive from "../../images/Canon/Canon EOS 200D.jpg";
import imgSix from "../../images/Canon/Canon EOS 200 II.jpg";
import imgSeven from "../../images/Canon/Canon EOS 700D.jpg";
import imgEight from "../../images/Canon/Canon EOS 600D.jpeg";
import imgNine from "../../images/Canon/Canon EOS 80D.jpg";
import imgTen from "../../images/Canon/Canon EOS 77D.jpg";
import imgEleven from "../../images/Canon/Canon EOS 90D.jpg";
import imgTwelve from "../../images/Canon/Canon EOS M50 MIRRORLESS.gif";
import imgThirteen from "../../images/Canon/Canon EOS 6D .jpg";
import imgFourteen from "../../images/Canon/Canon EOS 7D .jpg";
import imgFifteen from "../../images/Canon/Canon EOS R5.jpg";
import imgSixteen from "../../images/Canon/Canon EOS 5D III jpg.jpg";
import imgSeventeen from "../../images/Canon/Canon EOS 5D IV.jpg";

// import imgEightteen from '../../images/Canon/18-55 mm.jpg'
// import imgNineteen from '../../images/Canon/55-250 mm.jpg'
// import imgTwenty from '../../images/Canon/50mm STM jpg.jpg'
// import imgTwentyOne from '../../images/Canon/50mm.jpg'
// import imgTwentyTwo from '../../images/Canon/75-300 mm.jpg'
// import imgTwentyThree from '../../images/Canon/18-135 mm STM.jpg'
// import imgTwentyFour from '../../images/Canon/10-18 mm.jpg'
const canonData = [
  {
      id: 1,
      img: imgOne,
      mName: "EOS 1200D",
      price: 10500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 2,
      img: imgTwo,
      mName: "EOS 1300D",
      price: 11500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 3,
      img: imgThree,
      mName: "EOS 1500D",
      price: 13500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 4,
      img: imgFour,
      mName: "EOS 3000D",
      price: 14500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 5,
      img: imgFive,
      mName: "EOS 200D",
      price: 20500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 6,
      img: imgSix,
      mName: "EOS 200 II",
      price: 22500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 7,
      img: imgSeven,
      mName: "EOS 700D",
      price: 14500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 8,
      img: imgEight,
      mName: "EOS 600D",
      price: 13500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 9,
      img: imgNine,
      mName: "EOS 80D",
      price: 30500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 10,
      img: imgTen,
      mName: "EOS 77D",
      price: 24500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 11,
      img: imgEleven,
      mName: "EOS 90D",
      price: 44500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 12,
      img: imgTwelve,
      mName: "EOS M50",
      price: 19500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 13,
      img: imgThirteen,
      mName: "EOS 6D",
      price: 24500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 14,
      img: imgFourteen,
      mName: "EOS 7D",
      price: 20500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 15,
      img: imgFifteen,
      mName: "EOS R5",
      price: 101500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 16,
      img: imgSixteen,
      mName: "EOS 5D III",
      price: 38500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
  {
      id: 17,
      img: imgSeventeen,
      mName: "EOS 5D IV",
      price: 81500,
      note: " Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation. This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.",
  },
];
const Canon = () => {
    // console.log(canonData);
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
                    Canon <span style={{ color: "black" }}> Models</span>{" "}
                </strong>
            </p>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3 mt-2">
                    {canonData.map((canon) => (
                        <Link className="Cn" to={`/modelcanon/${canon.id}`}>
                            <div className="buyCam shadow">
                                <div className="container">
                                <img
                                    style={{
                                        borderRadius: "5px",
                                        width: "65%",
                                        height: "60%",
                                        marginLeft: "7px",
                                    }}
                                    src={canon.img}
                                    alt=""
                                />
                                <div class="card-body mt-3 mb-5">
                                    <h7 className="pra text-black">{canon.mName}</h7>
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
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">
                @Gadgefy {new Date().getFullYear()} Copyright All Rights Reserved
            </footer>
        </div>
    );
};

export default Canon;
