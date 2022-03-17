import React, { useContext, useEffect, useState } from 'react';
import logo from "../../Gadgefy/newlg.png";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavDropdown } from "react-bootstrap";
import useFirebase from "../../Login/Firebase/useFirebase";
import { UserContext } from '../../App';
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CallIcon from "@material-ui/icons/Call";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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
    <div className="nv">
      <nav id="navbar_top" className='navbar'>
        <Link to="/">
          <img
            style={{ width: "120px", marginBottom: "15px" }}
            src={logo}
            alt=""
          />
        </Link>
        <br />
        {/* <Link className="H text-black mt-2" to="/">
            Home
          </Link> */}

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* <li className='nav-item'>
          <Link className="nav-links text-black mt-2" to="/">
                  Home
                </Link>
          </li> */}

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >

            <NavDropdown
              className="HD text-black mt-2"
              title={<span className="text-dark">Sell</span>}
              menuVariant="white"
            >
              <Link className="dd text-black" to="/sellcamera">
                Sell Camera
              </Link>
              <br />
            </NavDropdown>

          </li>
          <li className='nav-item'>

            <NavDropdown
              className="HD text-black mt-2"
              title={<span className="text-dark">Buy</span>}
              menuVariant="white"
            >
              <Link className="dd text-black" to="/buyCamera">
                Buy Camera
              </Link>
              <br />
            </NavDropdown>
          </li>


          <li className='nav-item'>

            {loggedInUser.email ? (
              <NavDropdown
                className="HD mt-2"
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
              <Link className="HD text-black" to="/login">
                <PersonRoundedIcon className="icon" />
                Login
              </Link>
            )}
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link className="HD text-black mt-2" to="/contact">
              <CallIcon className="icon" />
              Contact
            </Link>

          </li>
          <li className='nav-item'>

            {isAdmin && (
              <Link className="HD text-black mt-2" onClick={closeMobileMenu} to="/dashboard">
                <DashboardCustomizeOutlinedIcon className="icon" />
                Dashboard
              </Link>
            )}
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default Navbar;