import React from "react";

export default function SignIn(props) {
    return (
        <form action="" className="signin">
            <h3>Login</h3>
            <input type="email" placeholder="Email Address" required/>
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign in</button>
            <div className="No-account">
                Don't Have an Account? <span onClick={()=>props.onFormSwitch("login")}>Sign Up</span>
            </div>
        </form>
    );
}
