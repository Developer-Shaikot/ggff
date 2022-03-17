import React, { useContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import initializeAuthentication from "./firebase.init";
import { UserContext } from "../../App";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [error, setError] = useState({});
  const auth = getAuth();
  //   const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
        const user = res.user;
        const { displayName, email } = user;
        // console.log(user.displayName);
        localStorage.setItem("user", JSON.stringify(user));
        const newUserInfo = { ...loggedInUser };
        newUserInfo.name = displayName;
        newUserInfo.email = email;
        console.log("new user", newUserInfo.email);
        setLoggedInUser(newUserInfo);

        // console.log("got solved reload issue",newUserInfo);
        history.replace(from);
        // setUserToken()
        //  console.log(displayName,email,photoURL);
      })
      .catch((err) => {
        console.log(err.message);
        // console.log(err);
      });
    //  console.log(user);
  };

  function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier, user);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  return { loggedInUser, handleGoogleSignIn, error, setUpRecaptcha };
};

export default useFirebase;
