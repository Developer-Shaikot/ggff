// import React , {useEffect} from 'react'
// import './Nav.css';
// import logo from "../../Gadgefy/newlg.png";

// import { NavLink } from 'react-router-dom';
// import $ from 'jquery';

// import { Button } from "react-bootstrap";
// import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import { NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { UserContext } from "../../App";
// import { useContext } from "react";
// import CallIcon from "@material-ui/icons/Call";
// import useFirebase from "../../Login/Firebase/useFirebase";

// const Nav = () => {

//   function animation(){
//     var tabsNewAnim = $('#navbarSupportedContent');
//     var activeItemNewAnim = tabsNewAnim.find('.active');
//     var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//     var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//     var itemPosNewAnimTop = activeItemNewAnim.position();
//     var itemPosNewAnimLeft = activeItemNewAnim.position();
//     $(".hori-selector").css({
//       "top":itemPosNewAnimTop.top + "px", 
//       "left":itemPosNewAnimLeft.left + "px",
//       "height": activeWidthNewAnimHeight + "px",
//       "width": activeWidthNewAnimWidth + "px"
//     });
//     $("#navbarSupportedContent").on("click","li",function(e){
//       $('#navbarSupportedContent ul li').removeClass("active");
//       $(this).addClass('active');
//       var activeWidthNewAnimHeight = $(this).innerHeight();
//       var activeWidthNewAnimWidth = $(this).innerWidth();
//       var itemPosNewAnimTop = $(this).position();
//       var itemPosNewAnimLeft = $(this).position();
//       $(".hori-selector").css({
//         "top":itemPosNewAnimTop.top + "px", 
//         "left":itemPosNewAnimLeft.left + "px",
//         "height": activeWidthNewAnimHeight + "px",
//         "width": activeWidthNewAnimWidth + "px"
//       });
//     });
//   }

//   useEffect(() => {
    
//     animation();
//     $(window).on('resize', function(){
//       setTimeout(function(){ animation(); }, 500);
//     });
    
//   }, []);

//   return (
//   <nav className="navbar navbar-expand-lg navbar-mainbg">
    
//       <NavLink className="navbar-brand navbar-logo" to="/" exact>
      
//               <img
//                 style={{ width: "120px", marginLeft: "10%" }}
//                 src={logo}
//                 alt=""
//               />
            
//       </NavLink>
    
    
//       <button 
//         className="navbar-toggler"
//         onClick={ function(){
//           setTimeout(function(){ animation(); });
//         }}
//         type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <i className="fas fa-bars text-white"></i>
//       </button>
 
//       <div 
//         className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
            
//             <div className="hori-selector">
//               <div className="left"></div>
//               <div className="right"></div>
//             </div>
            
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/" exact>
//                 <i 
//                 className="fas fa-tachometer-alt">
//                 </i>Home
//               </NavLink>
//             </li>

//             <li className="nav-item">
              
//               <NavDropdown
//                   className="ddown ml-3"
//                   title={<span className="text-dark">Sell</span>}
//                   menuVariant="white"
//                 >
//                   <Link className="dd text-black" to="/sellcamera">
//                     Sell Camera
//                   </Link>
//                   <br />
//                 </NavDropdown>
               
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/service" exact>
//                 <i 
//                 className="far fa-clone">
//                 </i>Services
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/testimonial" exact>
//                 <i 
//                 className="far fa-chart-bar">
//                 </i>Testimonial
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact" exact>
//                 <i 
//                 className="far fa-copy">
//                 </i>Contact Us
//               </NavLink>
//             </li>
//         </ul>
//       </div>
//   </nav>
//   )
// }
// export default Nav;