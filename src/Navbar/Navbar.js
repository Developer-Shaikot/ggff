import React, { useEffect, useState } from "react";
import logo from "../../Gadgefy/newlg.png";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext } from "react";
import CallIcon from "@material-ui/icons/Call";
import useFirebase from "../../Login/Firebase/useFirebase";

const Navbar = () => {
  const { user } = useFirebase();
  // console.log("user", user);
  const [isAdmin, setIsAdmin] = useState(false);
  // console.log(isAdmin, 'from admin');
  useEffect(() => {
    fetch("https://arcane-thicket-06182.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log("loggedInUser", loggedInUser);

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        document.getElementById("navbar_top").classList.add("fixed-top");
        // add padding top to show content behind navbar
      } else {
        document.getElementById("navbar_top").classList.remove("fixed-top");
        // remove padding top from body
        document.body.style.paddingTop = "0";
      }
    });
  });
  

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleLogOut = () => {
    const newUserInfo = { ...loggedInUser };
    newUserInfo.email = "";
    newUserInfo.name = "";
    setLoggedInUser(newUserInfo);
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bgc">
          <div className="cnnmbr">
            <h8 className="text-white">Call us: 6362234448</h8>
          </div>
        </nav>

        <nav
          id="navbar_top"
          className="navbar navbar-expand-lg navbar-light bg"
        >
          <br />
          <div className="container-fluid">
            <Link to="/">
              <img
                style={{ width: "120px", marginLeft: "10%" }}
                src={logo}
                alt=""
              />
            </Link>
            <button
              class="custom-toggler navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span
                style={{ color: "white" }}
                class="navbar-toggler-icon"
              ></span>
            </button>
            <div
              class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbarsExample09"
            >
              <div className="navbar-nav">
                <Link className="HD text-black mt-2" to="/">
                  Home
                </Link>

                <NavDropdown
                  className="ddown ml-3"
                  title={<span className="text-dark">Sell</span>}
                  menuVariant="white"
                >
                  <Link className="dd text-black" to="/sellcamera">
                    Sell Camera
                  </Link>
                  <br />
                </NavDropdown>

                <NavDropdown
                  className="ddown"
                  title={<span className="text-dark">Buy</span>}
                  menuVariant="white"
                >
                  <Link className="dd text-black" to="/buyCamera">
                    Buy Camera
                  </Link>
                  <br />
                </NavDropdown>

                {isAdmin && (
                  <Link className="HD text-black mt-2" to="/dashboard">
                    <DashboardCustomizeOutlinedIcon className="icon" />
                    Dashboard
                  </Link>
                )}

                <Link className="HD text-black mt-2" to="/contact">
                  <CallIcon className="icon" />
                  Contact
                </Link>

                {loggedInUser.email ? (
                  <NavDropdown
                    className="ddown"
                    title={
                      <span className="text-dark">
                        <PersonRoundedIcon className="icon" />
                        {loggedInUser.name ||
                          loggedInUser.displayName ||
                          loggedInUser.phoneNumber}
                      </span>
                    }
                    menuVariant="white"
                  >
                    {/* <Link className="HD text-black mt-2" to="/myOrder">
                  My Orders</Link>
                  <br /> */}
                    <Button
                      className="dd text-black mt-3"
                      variant="outline-warning"
                      onClick={handleLogOut}
                    >
                      Sign out
                    </Button>
                  </NavDropdown>
                ) : (
                  <Link className="HD text-black mt-2" to="/login">
                    <PersonRoundedIcon className="icon" />
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
