import React from "react";

export default function SignUp(props){
    return (
            <form action="" className="signup">
                <h3>Create An Account</h3>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email Address" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit">Create Account</button>
                <div className="Account">
                    Already Have an Account? <span onClick={()=>props.onFormSwitch("register")}>Sign In</span>
                </div>
            </form>
    )
}