import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import useFirebase from "../../Login/Firebase/useFirebase";
const Phone = () => {
  const history = useHistory();
  const { setUpRecaptcha } = useFirebase();
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState("");
  const [confirmObj, setConfirmObj] = useState("");

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number");
    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
      setConfirmObj(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };
  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp === null)
      return setError("Please enter a valid code.");
    try {
      setError("");
      await confirmObj.confirm(otp);
      // history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
        <label>Enter your Phone number: </label>
        <PhoneInput
          placeholder="Enter phone number"
          value={number}
          onChange={setNumber}
        />

        {/* <input
          type="number"
          value={number}
          placeholder="Enter Number"
          onChange={(e) => setNumber(e.target.value)}
        /> */}
        <br />
        <br />

        <div id="recaptcha-container" />
        <div>
          <Link to="/login">
            <button class="btn btn-danger">cancel</button> &nbsp;
          </Link>
          <button class="btn btn-primary" type="submit">
            Send Otp
          </button>
        </div>
      </form>
      <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
        <input
          type="otp"
          placeholder="Enter otp"
          onChange={(e) => setOtp(e.target.value)}
        />
        <br />
        <br />
        <div>
          <Link to="/login">
            <button class="btn btn-success">cancel</button> &nbsp;
          </Link>
          <button class="btn btn-primary" type="submit">
            Verify Otp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Phone;
