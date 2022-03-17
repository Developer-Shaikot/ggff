import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { UserContext } from "../../App";
import PersonIcon from '@mui/icons-material/Person'; const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    // console.log(isAdmin, 'from admin');
    useEffect(() => {
        fetch('https://arcane-thicket-06182.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));

    })

    return (
        <div className="sidebar mb-4">

            <div>

                <Link to="/manageService"> Manage service</Link>
                
                <Link to="/addService" >Add services</Link>
                <Link to="/addAdmin" >Create admin</Link>
                <Link to="/valueShow" >Customer's Response</Link>
            </div>

           
            


        </div>
    );
};

export default Sidebar;