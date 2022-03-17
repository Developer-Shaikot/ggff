import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import img from '../../GadgefyDone/Illustration/person icn with mobile.png';
import './Admin.css';
const Admin = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="pra col-md-6 mt-2">
                    <h2>Explore about Dashboard</h2>
                    <img className="imgResponsive" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Admin;