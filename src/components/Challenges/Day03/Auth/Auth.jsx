//imrs
import React, { useState } from 'react';
import Login from "./Login/Login"  //Login and Sign up go here, not in App.js as the Auth is their parent item, App is Auth's parent item
import Signup from "./Signup/Signup"

//sfc
const Auth = () => {

    const [showLogin, setShowLogin] = useState(true);

    function handleToggle(){
        setShowLogin(!showLogin);
        
        //this is the same as above, just longer.  :)
        // if(showLogin === true){
        //     setShowLogin(false)
        // } else {
        //     setShowLogin(true)
        // }
    }

    return ( 
        <div>
            {showLogin === true ? <Login/> : <Signup/>}
            {/* <Login/>
            <Signup /> */}
            <button onClick={handleToggle}>Toggle Button</button>
        </div>
    );
}

export default Auth;

// showLogin === true ? <Login/> : <Signup/> --If the showLogin is true, it's showing the Login part, if false, it's showing the Signup part