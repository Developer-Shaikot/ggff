import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../App';

const PrivateRoute = ({children, ...rest}) => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext);
  
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
        <Route
        {...rest}
        render={({ location }) =>
        (loggedInUser.email || sessionStorage.getItem('token'))  ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;