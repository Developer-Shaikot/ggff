import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import BuyingSection from "./Components/BuyingSection/BuyingSection";
import Sell from "./SellComponent/Sell/Sell";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Admin/Admin/Admin";
import AddService from "./AddService/AddService";
import BuyCamera from "./BuyCamera/BuyCamera";
import CameraDetails from "./CameraDetails/CameraDetails";
import ManageCamera from "./ManageCamera/ManageCamera";
import Login from "./Login/Login";
import PrivateRoute from "./PtivateRoute/PrivateRoute";
import AddAdmin from "./Admin/AddAdmin/AddAdmin";
import MyOrder from "./Admin/MyOrders/MyOrder";
// import SellCamera from "./SellComponent/SellCamera/SellCamera";
import ShowCameras from "./SellComponent/SellCamera/ShowCameras";
import Canon from "./SellComponent/Canon/Canon";
import Nikon from "./SellComponent/Nikon/Nikon";
import Sony from "./SellComponent/Sony/Sony";

import ModelDetails from "./ModelsComponent/ModelDetails/CanonModel1";
import NikonModel1 from "./ModelsComponent/NikonModel/NikonModel1";
import SonyModel from "./ModelsComponent/SonyModel";
import Contact from "./Contact/Contact";
import ShowValue from "./SellComponent/SellCamera/ShowValue";
import TermsAndCon from "./SellComponent/SellCamera/TermsAndCon";
import Phone from "./SellComponent/SellCamera/Phone";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    // name: "",
    // email: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const newUser = { ...loggedInUser };
      newUser.email = user.email;
      newUser.name = user.displayName;
      setLoggedInUser(newUser);
    }
    // console.log("iiiiiiii", user);
    // console.log(user.displayName);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router></Router>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/buy">
              <BuyingSection />
            </Route>
            <Route exact path="/sellcamera">
              <Sell></Sell>
            </Route>
            {/* <Route path="/phone">
              <Phone />
            </Route> */}
            <PrivateRoute exact path="/dashboard">
              <Navbar />
              <Admin />
            </PrivateRoute>
            <Route path="/addService">
              <Navbar />
              <AddService></AddService>
            </Route>
            <Route path="/buyCamera">
              <BuyCamera />
            </Route>
            <Route path="/buy/:id">
              <CameraDetails />
            </Route>
            <Route path="/manageService">
              <Navbar />
              <ManageCamera />
            </Route>
            <Route path="/valueShow">
              <Navbar />
              <ShowValue />
            </Route>
            {/* <Route exact path="/otp">
              <Otp/>
            </Route> */}
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/addAdmin">
              <AddAdmin></AddAdmin>
            </Route>
            <Route path="/myOrder">
              <Navbar />
              <MyOrder />
            </Route>
            <Route path="/modelcanon/:id">
              <ModelDetails />
            </Route>
            <Route path="/modelnikon/:id">
              <NikonModel1 />
            </Route>
            <Route path="/modelsony/:id">
              <SonyModel />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/terms&condition">
              <TermsAndCon />
            </Route>
            {/* <Route path="/Eos1200D">
            <Eos1200D />
            </Route>
            <Route path="/EOS1300D">
            <Eos1300D />
            </Route>
            <Route path="/EOS1500D">
            <EOS1500D />
            </Route>
            <Route path="/EOS3000D">
            <EOS3000D />
            </Route>
            <Route path="/EOS200D">
            <EOS200D />
            </Route>
            <Route path="/EOS200II">
            <EOS200II />
            </Route>
            <Route path="/EOS700D">
            <EOS700D />
            </Route>
            <Route path="/EOS600D">
            <EOS600D />
            </Route>
            <Route path="/EOS80D">
            <EOS80D />
            </Route>
            <Route path="/EOS77D">
            <EOS77D />
            </Route>
            <Route path="/EOS90D">
            <EOS90D />
            </Route>
            <Route path="/EOSM50MIRRORLESS">
            <EOSM50MIRRORLESS />
            </Route>
            <Route path="/EOS6D">
            <EOS6D />
            </Route>
            <Route path="/EOS7D">
            <EOS7D />
            </Route>
            <Route path="/EOSR5">
            <EOSR5 />
            </Route>
            <Route path="/EOS5DIII">
            <EOS5DIII />
            </Route>
            <Route path="/EOS5DIV">
            <EOS5DIV />
            </Route> */}
            <Route path="/showCamera">
              <ShowCameras />
            </Route>
            <Route path="/canon">
              <Navbar />
              <Canon></Canon>
            </Route>
            <Route path="/Nikon">
              <Navbar />
              <Nikon></Nikon>
            </Route>
            {/* <Route path="/NikonD3200">
              <NikonD3200 />
            </Route>
            <Route path="/NikonD3300">
              <NikonD3300 />
            </Route>
            <Route path="/NikonD3400">
              <NikonD3400 />
            </Route>
            <Route path="/NikonD3500">
              <NikonD3500 />
            </Route>
            <Route path="/NikonD5100">
              <NikonD5100 />
            </Route>
            <Route path="/NikonD5200">
              <NikonD5200 />
            </Route> */}
            <Route path="/Sony">
              <Navbar />
              <Sony></Sony>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
