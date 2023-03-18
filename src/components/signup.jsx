import React from "react";

export default function SignUp(){
    return (
            <form action="" className="signup">
                <h3>Create An Account</h3>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button type="submit">Create Account</button>
                <div className="signin">
                    Already Have an Account? <a href="">Sign In</a>
                </div>
            </form>
    )
}