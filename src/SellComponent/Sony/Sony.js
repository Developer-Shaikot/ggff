import React from "react";
import { Link } from "react-router-dom";
import imgOne from '../../images/Sony/Sony A III.jpg'
import imgTwo from '../../images/Sony/Sony A58.jpg'
import imgThree from '../../images/Sony/Sony A6100.jpg'
import imgFour from '../../images/Sony/Sony A6300.jpg'
import imgFive from '../../images/Sony/Sony A6400.jpg'
import imgSix from '../../images/Sony/Sony A68.jpg'
import imgSeven from '../../images/Sony/Sony A7 II.jpg'
import imgEight from '../../images/Sony/SonyA7.jpeg'

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
const Sony = () => {
  // console.log(sonyData);
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
          Sony <span style={{ color: "black" }}> Models</span>{" "}
        </strong>
      </p>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3 mt-2">
          {sonyData.map((Sony) => (
            <Link className="Cn" to={`/modelsony/${Sony.id}`}>
              <div className="buyCam shadow">
                <div className="container">
                <img
                  style={{
                    borderRadius: "5px",
                    width: "65%",
                    height: "60%",
                    marginLeft: "7px",
                  }}
                  src={Sony.img}
                  alt=""
                />
                <div class="card-body mt=5 mb-5">
                  <h7 className="pra text-black">{Sony.mName}</h7>
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


export default Sony;