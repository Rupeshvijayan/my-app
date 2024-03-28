import React, { useState } from "react";

function Login(){
    const [message,setMessage] = useState("Welcome! Please sign in to continue.");

    const signIn = ()=>{
        setMessage("You have successfully signed in!");
    }

    const signOut = ()=>{
        setMessage("You have successfully signed out. See you again soon!");
    }

    return(
        <div>
            <h2>authentication using useState</h2>
            <h3>{message}</h3>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signOut}>Sign Out</button>
        </div>
    );
}

export default Login;