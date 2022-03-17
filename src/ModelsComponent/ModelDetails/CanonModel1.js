import React, { useState } from "react";
import GetValue from "../../SellComponent/SellCamera/GetValue";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
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
import { useParams } from "react-router-dom";

// import imgEightteen from "../../images/Canon/18-55 mm.jpg";
// import imgNineteen from "../../images/Canon/55-250 mm.jpg";
// import imgTwenty from "../../images/Canon/50mm STM jpg.jpg";
// import imgTwentyOne from "../../images/Canon/50mm.jpg";
// import imgTwentyTwo from "../../images/Canon/75-300 mm.jpg";
// import imgTwentyThree from "../../images/Canon/18-135 mm STM.jpg";
// import imgTwentyFour from "../../images/Canon/10-18 mm.jpg";


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
const ModelDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  //   console.log("p", canonData);
  //   console.log("p", typeof id);
  const product = canonData.find((pd) => pd.id === Number(id));
  // console.log("product", product);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // console.log("id", canonData);
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
              <h3 style={{ color: "darkgoldenrod" }}>{product.mName}</h3>
            </p>
            <br />
            <p>
              You can get Upto:
              <h5 style={{ color: "darkred" }}>₹ {product.price}/-</h5>
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

export default ModelDetails;
