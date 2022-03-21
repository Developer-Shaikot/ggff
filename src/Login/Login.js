import { useContext, useState } from "react";
// import firebase from "firebase/compat/app";
import "./Login.css";
// import "firebase/compat/auth";

import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import img from "../GadgefyDone/Illustration/login illustration 1.png";
import logo from "../Gadgefy/logoofGadgefy.png";
// import firebaseConfig from "./firebase.config";
// import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "../App";
import Navbar from "../Components/Navbar/Navbar";
import useFirebase from "./Firebase/useFirebase";

function Login() {
  const { handleGoogleSignIn } = useFirebase();
  //   if (firebase.apps.length === 0) {
  //     firebase.initializeApp(firebaseConfig);
  //   }
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  //   const provider = new firebase.auth.GoogleAuthProvider();

  //   const setUserToken = () => {
  //     firebase
  //       .auth()
  //       .currentUser.getIdToken(/* forceRefresh */ true)
  //       .then(function (idToken) {
  //         sessionStorage.setItem("token", idToken);
  //       })
  //       .catch(function (error) {
  //         // Handle error
  //       });
  //   };

  const handleSignIn = () => {
    // firebase
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then((res) => {
    //     // console.log(res.user);
    //     const user = res.user;
    //     const { displayName, email } = user;
    //     // console.log(user.displayName);
    //     localStorage.setItem("user", JSON.stringify(user));
    //     const newUserInfo = { ...loggedInUser };
    //     newUserInfo.name = displayName;
    //     newUserInfo.email = email;
    //     setLoggedInUser(newUserInfo);
    //     // console.log("got solved reload issue",newUserInfo);
    //     history.replace(from);
    //     setUserToken();
    //     //  console.log(displayName,email,photoURL);
    //   })
    //   .catch((err) => {
    //     // console.log(err.message);
    //     // console.log(err);
    //   });
    //  console.log(user);
  };
  const handleSignOut = () => {
    // firebase
    //   .auth()
    //   .signOut()
    //   .then((res) => {
    //     const signedOutUser = {
    //       isLoggedIn: false,
    //       name: "",
    //       email: "",
    //       photo: "",
    //     };
    //     setUser(signedOutUser);
    //     setLoggedInUser(signedOutUser);
    //     // console.log('response', res);
    //     // Sign-out successful.
    //   })
    //   .catch((error) => {
    //     // console.log(error);
    //     // An error happened.
    //   });
  };

  // const handleBlur = (e) => {
  //   let isFieldValid = true;
  //   console.log(e.target.name, e.target.value);
  //   if(e.target.name === 'email'){
  //     isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
  //   }
  //   if(e.target.name === 'password'){
  //     const isPasswordValid = e.target.value.length > 6;
  //     const passwordHasNumber =  /\d{1}/.test(e.target.value);
  //     console.log(passwordHasNumber);
  //     isFieldValid = isPasswordValid && passwordHasNumber;
  //   }
  //   console.log(isFieldValid);
  //   if(isFieldValid){
  //     const newUserInfo = {...user};
  //     newUserInfo[e.target.name] = e.target.value;
  //     setUser(newUserInfo);
  //   }
  // }
  const handleBlur = (e) => {
    // debugger;
    // console.log(e.target.name, e.target.value);
    let isEmailValid = true;
    if (e.target.name === "email") {
      isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      //  console.log(e.target.name,isEmailValid);
    }

    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      //smart validation  /^([a-z0-9]{8,})$/
      //  const isPasswordValid =/^([a-z0-9]{8,})$/.test(e.target.value)
      const passwordHasNumber = /\d/.test(e.target.value);
      isEmailValid = isPasswordValid && passwordHasNumber;
      // console.log(isEmailValid);
    }
    if (isEmailValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
    }
    // console.log('last one', isEmailValid);
  };
  const handleSubmit = (e) => {
    // console.log(user.password, user.email);
    // if (newUser && user.email && user.password) {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(user.email, user.password)
    //     .then((res) => {
    //       // Signed in
    //       // var user = userCredential.user;
    //       const newUserInfo = { ...user };
    //       newUserInfo.error = "";
    //       newUserInfo.success = true;
    //       setUser(newUserInfo);
    //       setLoggedInUser(newUserInfo);
    //       updateUserName(user.name);
    //       history.replace(from);
    //       // ...
    //     })
    //     .catch((error) => {
    //       // var errorCode = error.code;
    //       // var errorMessage = error.message;
    //       const newUserInfo = { ...user };
    //       newUserInfo.error = error.message;
    //       newUserInfo.success = false;
    //       setUser(newUserInfo);
    //       setLoggedInUser(newUserInfo);
    //       // console.log(errorCode);
    //       // console.log('Used email', errorCode,errorMessage);
    //       // ..
    //     });
    // }
    // if (!newUser && user.email && user.password) {
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(user.email, user.password)
    //     .then((res) => {
    //       // Signed in
    //       const newUserInfo = { ...user };
    //       newUserInfo.error = "";
    //       newUserInfo.success = true;
    //       setUser(newUserInfo);
    //       setLoggedInUser(newUserInfo);
    //       history.replace(from);
    //       // console.log('sign in user info', res.user.displayName);
    //       // ...
    //     })
    //     .catch((error) => {
    //       const newUserInfo = { ...user };
    //       newUserInfo.error = error.message;
    //       newUserInfo.success = false;
    //       setUser(newUserInfo);
    //       setLoggedInUser(newUserInfo);
    //     });
    // }
    // e.preventDefault();
  };
  const updateUserName = (name) => {
    // const user = firebase.auth().currentUser;
    // user
    //   .updateProfile({
    //     displayName: name,
    //   })
    //   .then(function () {
    //     console.log("User name updated successfully");
    //   })
    //   .catch(function (error) {
    //     // An error happened.
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 rounded-3 mt-2">
          <div className="container mt-5">
            <div className="lgFrom">

              <div className="pra mt-4">
                <p style={{ color: "red" }}>{user.error}</p>
                {user.success && (
                  <h4 style={{ color: "green" }}>
                    {" "}
                    User {newUser ? "created" : "Logged in"} successful{" "}
                  </h4>
                )}
                {user.isLoggedIn ? (
                  <Button variant="outline-success" onClick={handleSignOut}>
                    sign out
                  </Button>
                ) : (
                  <Button
                    variant="outline-success"
                    onClick={handleGoogleSignIn}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faGoogle} /> Login with Google
                  </Button>
                )}
              </div>
              <form className="form-horizontal mt-3" onSubmit={handleSubmit}>
                <br />
                <input
                  className="form-control"
                  type="text"
                  onBlur={handleBlur}
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <br />

                <input
                  className="form-control"
                  type="password"
                  onBlur={handleBlur}
                  name="password"
                  id=""
                  placeholder="Enter your password"
                  required
                />
                <br />
                <input
                  className="form-control bg-warning text-white"
                  variant="outline-warning"
                  type="submit"
                  value={newUser ? "Sign up" : "Log in"}
                />
              </form>
            </div>
          </div>
        </div>

        <br />
      </div>
      <footer class="pra text-center mt-5 pt-3 ml-5 justify-content-end text-black mb-1">
        @Gadgefy {new Date().getFullYear()} Copyright All Rights Reserved
      </footer>
    </div>
  );
}

export default Login;
