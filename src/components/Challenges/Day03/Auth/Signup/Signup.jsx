import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function emailOnChange(event){
        console.log(event.target.value);
        setEmail(event.target.value)
    }

    function passwordOnChange(event){
        console.log(event.target.value);
        setPassword(event.target.value)
    }

    return (
        <div>
            <h3>Sign Up</h3>
            <input type="text" placeholder="signup email" value={email} onChange={(e) => emailOnChange(e)}/>
            <input type="text" placeholder="signup password" value={password} onChange={(e) => passwordOnChange(e)}/>
        </div>
    );
}

export default Signup;